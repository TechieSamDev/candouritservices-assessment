'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useFetchUser from '@/hooks/useFetchUser';
import { useEffect, useRef, useState } from 'react';
import useFetchRepo from '@/hooks/useFetchRepo';

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description?: string;
};

export default function Home() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const {
    mutate: fetchUser,
    isPending: isLoadingUser,
    data: user,
  } = useFetchUser();

  const {
    mutate: fetchRepos,
    isPending: isFetchingRepos,
    data: repos,
  } = useFetchRepo();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    if (!usernameRef.current) return;

    fetchUser(usernameRef.current.value, {
      onSuccess(userData) {
        console.log(userData);
        fetchRepos(usernameRef.current?.value as string, {
          onSuccess(repos) {
            console.log(repos);
          },
          onError(error) {
            console.log(error);
          },
        });
      },
      onError(err) {
        setMessage(err.message);
      },
    });
  };

  return (
    <div className="flex items-center justify-center border h-screen">
      <div className="md:w-96 w-full p-4">
        {message && (
          <p className="text-red-500 text-center px-3 py-1 rounded bg-red-100">
            {message}
          </p>
        )}
        <form onSubmit={handleSearch} className="m-auto flex py-5">
          <Input
            className="rounded-r-none"
            placeholder="Search Username"
            ref={usernameRef}
          />
          <Button className="rounded-l-none" disabled={isLoadingUser}>
            Search
          </Button>
        </form>

        <div className="min-h-96 p-5 border space-y-5">
          {isLoadingUser && <p>Loading User...</p>}
          {user && (
            <div className="flex items-center gap-5 bg-gray-200 rounded shadow p-2 px-4">
              <Avatar>
                <AvatarImage src={user?.avatar_url} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="w-full space-y-1">
                <p className="font-bold text-xl">{user?.name}</p>
                <p className="text-xs text-gray-700">{user?.bio}</p>
                <p className="text-xs">
                  {user.followers} Followers . {user.following} Following
                </p>
              </div>
            </div>
          )}

          {isFetchingRepos && <p>Loading Repo...</p>}
          {repos?.length > 0 && user && (
            <div className="space-y-2">
              <p>
                <b>{user?.public_repos}</b> Public Repositories
              </p>
              <ul className="space-y-2">
                {repos.map((repo: Repo) => (
                  <ul
                    key={repo?.id}
                    className="hover:bg-gray-200 space-y-1 bg-gray-100 rounded"
                  >
                    <a className="p-3 block" target='_blank' href={repo?.html_url}>
                      <h3 className="font-bold">{repo?.name}</h3>
                      <p className="text-xs text-gray-500">
                        {repo?.description || 'No Description'}
                      </p>
                    </a>
                  </ul>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
