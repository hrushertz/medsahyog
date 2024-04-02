import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Components/AdminDashboard';
import AppointmentForm from './Components/AppointmentForm';
import LoginPage from './Components/LoginPage';
import DepartmentList from './Components/DepartmentList';
import Help from './Components/Help';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/new-appointment" element={<AppointmentForm />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/admin-page" element={<AdminDashboard />} />
        <Route path='/help-page' element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
