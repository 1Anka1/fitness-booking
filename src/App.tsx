import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './components/shared/Layout/Layout';
import { AdminLayout } from './components/Admin/AdminLayout/AdminLayout';

const Home = lazy(() => import('./pages/Home'));
const DashboardTrainer = lazy(() => import('./pages/DashboardTrainer'));
const DashboardUser = lazy(() => import('./pages/DashboardUser'));
const AdminPanel = lazy(() => import('./pages/Admin/AdminPanel'));
const Trainers = lazy(() => import('./pages/Admin/Trainers/Trainers'));
const Users = lazy(() => import('./pages/Admin/Users/Users'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="trainer" element={<DashboardTrainer />} />
        <Route path="booking" element={<DashboardUser />} />

        {/* ADMIN */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} />
          <Route path="users" element={<Users />} />
          <Route path="trainers" element={<Trainers />} />
        </Route>
      </Route>

      {/* LOGIN */}
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
