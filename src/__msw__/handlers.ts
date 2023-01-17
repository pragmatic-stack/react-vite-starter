import { rest } from 'msw';

import { db } from '@/__msw__/db';
import { API_URL } from '@/config';
import { TodoEntity } from '@/features/todos';
import { ListResponse } from '@/types/ListResponse';

const API_ROUTE_TODOS = `${API_URL}/todos`;

const handlers = [
  rest.get<any, any, ListResponse<TodoEntity>>(API_ROUTE_TODOS, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: db.todo.getAll().length,
        data: db.todo.getAll(),
      })
    );
  }),
];

export { handlers };
