import { setupWorker } from 'msw';

import { handlers } from '@/__msw__/handlers';

const worker = setupWorker(...handlers);

export { worker };
