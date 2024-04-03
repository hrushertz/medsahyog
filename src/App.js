import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Components/AdminDashboard';
import AppointmentForm from './Components/AppointmentForm';
import LoginPage from './Components/LoginPage';
import DepartmentList from './Components/DepartmentList';
import Help from './Components/Help';
import RegistrationPage from './Components/RegistrationPage';
import DepartmentTable from './Components/DepartmentTable';
import ViewDoctors from './Components/ViewDoctors';
import DoctorsDashboard from './Components/DoctorsDashboard';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/doctor-dashboard" element={<DoctorsDashboard />} />
        <Route path="/new-appointment" element={<AppointmentForm />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/admin-page" element={<AdminDashboard />} />
        <Route path='/help-page' element={<Help />} />
        <Route path="department-table" element={<DepartmentTable />} />
        <Route path='add-department' element={<DepartmentList />} />
        <Route path='view-doctors' element={<ViewDoctors />} />
        <Route path='registration-page' element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
