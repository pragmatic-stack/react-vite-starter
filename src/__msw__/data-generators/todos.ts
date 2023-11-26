import { faker } from '@faker-js/faker';

import { TodoEntity } from '@/features/todos';

type Overrides = Record<string, any>;

export const todoGenerator = (overrides?: TodoEntity & Overrides) => ({
  id: faker.datatype.uuid(),
  name: faker.lorem.sentence(),
  completed: false,
  ...overrides,
});
