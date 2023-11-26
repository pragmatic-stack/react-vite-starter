import { setupWorker } from 'msw/browser';

import { handlers } from '@/__msw__/handlers';

const worker = setupWorker(...handlers);

export { worker };
