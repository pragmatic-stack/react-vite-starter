import { RouteObject, useRoutes } from 'react-router-dom';

import { ToDosRoutes } from '@/features/todos';

const getRoutes = (): RouteObject[] => {
  return [{ path: '/todos/*', element: <ToDosRoutes /> }];
};
const AppRoutes = () => {
  const common: RouteObject[] = [{ path: '/todos/*', element: <ToDosRoutes /> }];

  const element = useRoutes([...common]);

  return <>{element}</>;
};

export { getRoutes, AppRoutes };
