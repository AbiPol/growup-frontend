import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { teacherRoutes } from './features/formador.routes';

// Creamos el router principal
const router = createBrowserRouter([
  ...teacherRoutes,
  {
    path: '/',
    element: <Navigate to="panel-gestion" replace /> // Redirige a la subruta por defecto
  },
  {
    path: '*',
    element: <div className="p-10 text-center text-red-500 font-bold">404 - Página no encontrada (React)</div>
  }
], {
  basename: '/private/teacher'
});

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;