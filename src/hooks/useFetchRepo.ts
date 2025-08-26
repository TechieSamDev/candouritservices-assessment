import { fetchRepo } from '@/services/api';
import { useMutation } from '@tanstack/react-query';

const useFetchRepo = () =>
  useMutation({
    mutationFn: (username: string) => fetchRepo(username),
  });

export default useFetchRepo;
