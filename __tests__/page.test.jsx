import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../src/app/page';
import useFetchUser from '../src/hooks/useFetchUser';
import useFetchRepo from '../src/hooks/useFetchRepo';

jest.mock('../src/hooks/useFetchUser');
jest.mock('../src/hooks/useFetchRepo');

describe('Home Component', () => {
  const mockFetchUser = jest.fn();
  const mockFetchRepo = jest.fn();

  beforeEach(() => {
    useFetchUser.mockReturnValue({
      mutate: mockFetchUser,
      isPending: false,
      data: null,
    });

    useFetchRepo.mockReturnValue({
      mutate: mockFetchRepo,
      isPending: false,
      data: null,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders input and button', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText('Search Username'));
    expect(screen.getByText('Search'));
  });

  test('calls fetchUser on form submit', async () => {
    render(<Home />);
    const input = screen.getByPlaceholderText('Search Username');
    const button = screen.getByText('Search');

    fireEvent.change(input, { target: { value: 'techiesamdev' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockFetchUser).toHaveBeenCalledWith(
        'techiesamdev',
        expect.any(Object) // onSuccess/onError callbacks
      );
    });
  });

  test('displays loading texts when fetching', () => {
    useFetchUser.mockReturnValue({
      mutate: mockFetchUser,
      isPending: true,
      data: null,
    });

    useFetchRepo.mockReturnValue({
      mutate: mockFetchRepo,
      isPending: true,
      data: null,
    });

    render(<Home />);
    expect(screen.getByText('Loading User...'));
    expect(screen.getByText('Loading Repo...'));
  });

  test('displays error message when setMessage is called', async () => {
    mockFetchUser.mockImplementation((_, { onError }) => {
      onError({ message: 'User not found' });
    });

    render(<Home />);
    const input = screen.getByPlaceholderText('Search Username');
    const button = screen.getByText('Search');

    fireEvent.change(input, { target: { value: 'invaliduser' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('User not found'));
    });
  });

  test('displays user info and repo list on success', async () => {
    const mockUser = {
      name: 'Techie Sam',
      bio: 'Dev',
      avatar_url: 'avatar.png',
      followers: 10,
      following: 5,
      public_repos: 2,
    };

    const mockRepos = [
      { id: 1, name: 'repo1', html_url: '#', description: 'Repo 1' },
      { id: 2, name: 'repo2', html_url: '#', description: '' },
    ];

    useFetchUser.mockReturnValue({
      mutate: (_, { onSuccess }) => onSuccess(mockUser),
      isPending: false,
      data: mockUser,
    });

    useFetchRepo.mockReturnValue({
      mutate: (_, { onSuccess }) => onSuccess(mockRepos),
      isPending: false,
      data: mockRepos,
    });

    render(<Home />);
    const input = screen.getByPlaceholderText('Search Username');
    const button = screen.getByText('Search');
    fireEvent.change(input, { target: { value: 'techiesamdev' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Techie Sam'));
      expect(screen.getByText('Dev'));
      expect(screen.getByText('10 Followers . 5 Following'));
      expect(screen.getByText('repo1'));
      expect(screen.getByText('Repo 1'));
      expect(screen.getByText('repo2'));
      expect(screen.getByText('No Description'));
    });
  });
});
