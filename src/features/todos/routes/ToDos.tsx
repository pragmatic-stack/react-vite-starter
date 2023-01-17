import React from 'react';

import { ToDosList } from '@/features/todos/components/ToDosList';

import { useTodos } from '../api/getTodos';

export const ToDos: React.FC = () => {
  const { data } = useTodos();

  return (
    <div>
      <h1 className="bg-primary-900">Todos</h1>
      {data && <ToDosList items={data.data} />}
    </div>
  );
};
