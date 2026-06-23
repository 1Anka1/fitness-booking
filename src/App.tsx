import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './components/shared/Layout/Layout';
import { AdminLayout } from './components/Admin/AdminLayout/AdminLayout';
import { PublicRoutes } from './components/AuthRoutes/PublicRoutes';
import { PrivateRoutes } from './components/AuthRoutes/PrivateRoutes';
import GymClubPassOptions from './pages/GymClubs/GymClubPassOptions';

const Home = lazy(() => import('./pages/Home/Home'));
const DashboardTrainer = lazy(() => import('./pages/Trainers'));
const DashboardUser = lazy(() => import('./pages/DashboardUser'));
const AdminPanel = lazy(() => import('./pages/Admin/AdminPanel'));
const Trainers = lazy(() => import('./pages/Admin/Trainers/Trainers'));
const Users = lazy(() => import('./pages/Admin/Users/Users'));
const Authentication = lazy(() => import('./pages/Authentication'));
const UserCalendar = lazy(() => import('./pages/UserCalendar'));
const GymClubs = lazy(() => import('./pages/GymClubs/GymClubs'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoutes redirectTo="/calendar" component={<Home />} />} />

        <Route
          path="calendar"
          element={<PrivateRoutes redirectTo="/" component={<UserCalendar />} />}
        />
        <Route
          path="trainer"
          element={<PrivateRoutes redirectTo="/" component={<DashboardUser />} />}
        />
        <Route
          path="booking"
          element={<PrivateRoutes redirectTo="/" component={<DashboardTrainer />} />}
        />

        <Route path="offers/pass/clubs" element={<GymClubs />} />
        <Route path="offers/pass/clubs/:clubId" element={<GymClubPassOptions />} />
      </Route>

      <Route
        path="auth/login"
        element={
          <PublicRoutes redirectTo="/calendar" component={<Authentication mode="login" />} />
        }
      />

      <Route
        path="auth/registration"
        element={
          <PublicRoutes redirectTo="/calendar" component={<Authentication mode="registration" />} />
        }
      />

      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminPanel />} />
        <Route path="users" element={<Users />} />
        <Route path="trainers" element={<Trainers />} />
      </Route>
    </Routes>
  );
}

export default App;
