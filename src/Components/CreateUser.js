import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentsIcon from '../Assets/AppointmentsIcon.svg';
import DoctorList1 from '../Components/DoctorList1';
import PatientList1 from '../Components/PatientList1'; // Importing PatientList1 component
import Footer from './Footer';
import Navbar from './Navbar';
import './createuser.css'

const CreateUser = () => {
  const [userType, setUserType] = useState('Patient'); // Default user type is Patient

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  // Define a function to render the appropriate component based on userType
  const renderUserList = () => {
    if (userType === 'Doctor') {
      return <DoctorList1 />;
    } else {
      return <PatientList1 />;
    }
  };

  return (
    <>
     <div className="top-bar">
        <Link to="login-page"><a>Login</a> </Link>
        <Link to="/user-create"><a>Sign Up</a> </Link>
      </div>
  
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Main content */}
        <div style={{ flex: 1, paddingTop: '45px', backgroundColor: '#F3F6FC', overflowX: 'hidden', position: 'relative' }}>
          {/* Doctors Dashboard title */}
          <div style={{ backgroundColor: '#273967', height: '45px', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
            <h4 style={{ color: 'white', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 300, paddingLeft: '20px' }}>Create User</h4>
          </div>
          {/* Appointment content */}
          <div style={{ padding: '20px' }} >
            <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>REGISTER</h2>
            <div className='section-register' style={{ border: '1px solid #E5E5E5', borderRadius: '15px', padding: '20px', marginTop: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
           
            <div style={{ display: 'flex', alignItems: 'center' }} className='custom-div'>

  <label className='custom-label' htmlFor="userType" style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px', color: '#000000' }}>Type:</label>
  <select className='custom-select' id="userType" value={userType} onChange={handleUserTypeChange} style={{ width: '250px', height: '45px', backgroundColor: '#F2F2F2', border: 'none', marginBottom: '20px', borderRadius: '15px', color: '#02D0C2' }}>
    <option value="Patient">Patient</option>
    <option value="Doctor">Doctor</option>
  </select>


</div>

              <img src="data:image/png;base64,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" alt="Your Image" style={{ width: '200px', height: '100px', marginLeft: 'auto' }} />


</div>

            {renderUserList()} {/* Render the appropriate user list based on userType */}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default CreateUser;
