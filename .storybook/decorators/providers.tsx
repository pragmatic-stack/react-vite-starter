import { Decorator } from '@storybook/react';
import React from 'react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '../../src/lib';

export const providersDecorator: Decorator = (Story) => (
  <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
);
