import { factory, primaryKey } from '@mswjs/data';

const db = factory({
  todo: {
    id: primaryKey(String),
    name: String,
    completed: Boolean,
  },
});

export { db };
