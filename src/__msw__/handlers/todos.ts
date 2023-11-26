import { http, HttpResponse } from 'msw';

import { db } from '@/__msw__/db';
import { config } from '@/config';
import { TodoEntity } from '@/features/todos';
import { ListResponse } from '@/types/ListResponse';

const API_ROUTE_TODOS = `${config.apiUrl}/todos`;

const todosHandlers = [
  http.get<any, any, ListResponse<TodoEntity>>(API_ROUTE_TODOS, () => {
    return HttpResponse.json({
      count: db.todo.count(),
      data: db.todo.getAll(),
    });
  }),
];

export { todosHandlers };
