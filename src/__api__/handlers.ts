import { rest, RestHandler } from 'msw';

import { db } from '@/__api__/db';

const API_ROUTE_TODOS = '/todos';

const handlers: RestHandler[] = [
  /**
   * Get Todos API route
   */
  rest.get(API_ROUTE_TODOS, (req, res, ctx) => {
    console.log(API_ROUTE_TODOS);

    return res(
      ctx.status(200),
      ctx.json({
        count: db.todo.count(),
        data: db.todo.getAll(),
      })
    );
  }),
];

export { handlers };
