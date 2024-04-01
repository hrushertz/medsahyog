import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Components/AdminDashboard';
import AppointmentForm from './Components/AppointmentForm';
import LoginPage from './Components/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/new-appointment" element={<AppointmentForm />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/admin-page" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
