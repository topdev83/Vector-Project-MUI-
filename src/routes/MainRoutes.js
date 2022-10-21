import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// render - forms & tables
const Projects = Loadable(lazy(() => import('pages/projects')));
const Statistics = Loadable(lazy(() => import('pages/statistics')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          id: 'projects',
          path: 'projects',
          children: [
            {
              path: '',
              element: <Projects />
            }
          ]
        },
        {
          id: 'statistics',
          path: 'statistics',
          children: [
            {
              path: '',
              element: <Statistics />
            }
          ]
        }
      ]
    }
  ]
};

export default MainRoutes;
