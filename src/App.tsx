import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './components/shared/Layout/Layout';
import { DashboardTrainer } from './pages/DashboardTrainer';
import { Calendar } from './components/Calendar/Calendar';
import { BookingModal } from './components/BookingModal/BookingModal';
import { AdminPage } from './components/AdminPage/AdminPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="trainer" element={<DashboardTrainer />} />
        <Route path="booking" element={<BookingModal />} />

        <Route path="calendar" element={<Calendar />} />
        <Route path="admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;
