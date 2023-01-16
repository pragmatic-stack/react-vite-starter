import { useQuery } from 'react-query';

import { axios } from '@/lib';

import { TodoEntity } from '../types';

const TODOS_QUERY_KEY = ['todos'];

const useTodos = () => {
  return useQuery<{ count: number; data: TodoEntity[] }>(TODOS_QUERY_KEY, () =>
    axios.get('/todos').then((r) => r.data)
  );
};

export { useTodos };
