import { rest } from 'msw';

import { db } from '@/__msw__/db';
import { config } from '@/config';
import { TodoEntity } from '@/features/todos';
import { ListResponse } from '@/types/ListResponse';

const API_ROUTE_TODOS = `${config.apiUrl}/todos`;

const todosHandlers = [
  rest.get<any, any, ListResponse<TodoEntity>>(API_ROUTE_TODOS, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: db.todo.count(),
        data: db.todo.getAll(),
      })
    );
  }),
];

export { todosHandlers };
