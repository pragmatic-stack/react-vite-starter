import { setupServer } from 'msw/node';

import { handlers } from '@/__api__/handlers';

const server = setupServer(...handlers);

export { server };
