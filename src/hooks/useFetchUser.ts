import { fetchUser } from '@/services/api';
import { useMutation } from '@tanstack/react-query';

const useFetchUser = () =>
  useMutation({
    mutationFn: (username: string) => fetchUser(username),
  });

export default useFetchUser;
