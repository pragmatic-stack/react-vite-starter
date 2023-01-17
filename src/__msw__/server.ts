import { setupServer } from 'msw/node';

import { handlers } from '@/__msw__/handlers';

const server = setupServer(...handlers);

export { server };
