import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentsIcon from '../Assets/AppointmentsIcon.svg';
import DoctorList1 from '../Components/DoctorList1';
import PatientList1 from '../Components/PatientList1'; // Importing PatientList1 component
import Footer02 from './Footer02';

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
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Main content */}
        <div style={{ flex: 1, paddingTop: '45px', backgroundColor: '#F3F6FC', overflowX: 'hidden', position: 'relative' }}>
          {/* Doctors Dashboard title */}
          <div style={{ backgroundColor: '#273967', height: '45px', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
            <h4 style={{ color: 'white', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 300, paddingLeft: '20px' }}>Create User</h4>
          </div>
          {/* Appointment content */}
          <div style={{ padding: '20px' }}>
            <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>AAA</h2>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid ##E5E5E5', borderRadius: '15px', padding: '20px', marginTop: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <label htmlFor="userType" style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px', color: 'black' }}>Type:</label>
                <select id="userType" value={userType} onChange={handleUserTypeChange} style={{ width: '250px', height: '45px', backgroundColor: '#F2F2F2', border: 'none', marginBottom: '20px', borderRadius: '15px', color: '#02D0C2' }}>
                  <option value="Patient">Patient</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>
            </div>
            {renderUserList()} {/* Render the appropriate user list based on userType */}
          </div>
        </div>
        <Footer02 />
      </div>
    </>
  );
};

export default CreateUser;
