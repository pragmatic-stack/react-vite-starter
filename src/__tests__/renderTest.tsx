import { render } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { queryClient } from '@/lib';
import { getRoutes } from '@/routes';

type TestParams = {
  currentUrl: string;
};
const renderTest = ({ currentUrl }: TestParams) => {
  const router = createMemoryRouter(getRoutes(), { initialEntries: [currentUrl] });

  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export type { TestParams };
export { renderTest };
