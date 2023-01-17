import type { Meta } from '@storybook/react';

import { ToDos } from './ToDos';

const meta: Meta<typeof ToDos> = {
  title: 'Features/Todos',
  component: ToDos,
};

export default meta;

export const ListPage = {
  render: () => <ToDos />,
};
