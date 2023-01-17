import React from 'react';

import { TodoEntity } from '@/features/todos';

type ToDoItemProps = {
  data: TodoEntity;
};

const ToDoItem: React.FC<ToDoItemProps> = ({ data: { id, name, completed } }) => {
  return (
    <div>
      {id} | {name} | {completed}
    </div>
  );
};

const ToDosList: React.FC<{ items: TodoEntity[] }> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ToDoItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export { ToDosList };
