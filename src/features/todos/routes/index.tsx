import { Navigate, Route, Routes } from 'react-router-dom';

import { ToDos } from './ToDos';
const ToDosRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ToDos />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};

export { ToDosRoutes };
