import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Components/AdminDashboard';
import AppointmentForm from './Components/AppointmentForm';
import LoginPage from './Components/LoginPage';
import DepartmentList from './Components/DepartmentList';
import Help from './Components/Help';
import RegistrationForm from './Components/RegistrationForm';
import DoctorsDashboard from './Components/DoctorsDashboard';
import AddDepartmentForm from './Components/AddDepartmentForm';
import CreateUser from './Components/CreateUser';
import PatientDashbaord from './Components/PatientDashboard';
import AppointmentPage from './Components/AppointmentPage';
import AppointmentList from './Components/AppointmentList';
import DoctorAvailability from './Components/DoctorAvailability';
import PatientList1 from './Components/PatientList1';
import DoctorList from './Components/DoctorList';
import ShowAppointedList from './Components/ShowAppointedList';
import HomePage from './Components/Homepage/HomePage';
import AboutUs from './Components/AboutUs/About.js'




const App = () => {
  return (
 
 <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/admin-page" element={<AdminDashboard />} />
        <Route path="/new-appointment" element={<AppointmentForm />} />
       <Route path="/add-department" element={<AddDepartmentForm />} />
       <Route path="/doctor-page" element={<DoctorsDashboard/>}/>
       <Route path="/user-create" element={<CreateUser/>}/>
       <Route path="/patient-dashboard" element={<PatientDashbaord/>}/>
       <Route path="/appointment-page" element={<AppointmentPage/>}/>
       <Route path="/appointment-list" element={<AppointmentList/>}/>
        <Route path="/doctor-availability" element={<DoctorAvailability/>}/>
        <Route path='/patient-list1' element={<PatientList1/>}/>
        <Route path='/Registration-form' element={<RegistrationForm/>}/>
        <Route path='/show-appointedlist' element={<ShowAppointedList/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
       
      
        



       

        {/* Add other routes here */}
        
      </Routes>
    </Router> 
  );
 



  

   

};

export default App;
