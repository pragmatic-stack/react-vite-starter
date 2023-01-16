import React from 'react';

import { useTodos } from '../api/getTodos';

export const ToDos: React.FC = () => {
  const { data } = useTodos();

  return (
    <div>
      <h1>Todos</h1>
      <div>
        {data && data.count && data.data.map((todo) => <div key={todo.id}>{todo.name}</div>)}
      </div>
    </div>
  );
};
