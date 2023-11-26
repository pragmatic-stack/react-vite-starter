import { factory, primaryKey } from '@mswjs/data';

const db = factory({
  todo: {
    id: primaryKey(String),
    name: String,
    completed: Boolean,
  },
});

db.todo.create({ id: 'note-0', name: 'Buy milk', completed: true });
db.todo.create({ id: 'note-1', name: 'Buy eggs', completed: false });
db.todo.create({ id: 'note-2', name: 'Buy bread', completed: false });

export { db };
