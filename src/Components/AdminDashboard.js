import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DepartmentIcon from '../Assets/DepartmentIcon.svg';
import AppointmentsIcon from '../Assets/AppointmentsIcon.svg';
import DoctorsIcon from '../Assets/DoctorsIcon.svg';
import AssignDoctorIcon from '../Assets/AssignDoctorIcon.svg';
import LogoutIcon from '../Assets/LogoutIcon.svg';
import DoctorList from '../Components/DoctorList';
import AssignDoctors from '../Components/AssignDoctors';
import ApppointmentList from '../Components/AppointmentList';
import ApppointmentForm from '../Components/AppointmentForm';
import Footer from '../Components/Footer';
import DepartmentList from './DepartmentList';
import Navbar from './Navbar';

const AdminDashboard = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const buttons = [
    { icon: DepartmentIcon, alt: 'Department Icon' },
    { icon: AppointmentsIcon, alt: 'Appointments Icon' },
    { icon: DoctorsIcon, alt: 'Doctors Icon' },
    { icon: AssignDoctorIcon, alt: 'Assign Doctor Icon' }
  ];

  return (
    <> 
    <Navbar/>
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Side panel */}
      <div style={{ backgroundColor: '#dce6f5', width: '95px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '45px' }}>
        {/* Icon buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '45px' }}>
          {buttons.map((button, index) => (
            <button
              key={index}
              style={buttonStyle}
              onClick={() => handleButtonClick(index)}
            >
              <div style={circleContainer}>
                {activeButton === index && <div style={redCircle}></div>}
                <img src={button.icon} alt={button.alt} style={activeButton === index ? activeIconStyle : iconStyle} />
              </div>
            </button>
          ))}
        </div>
        {/* Logout button */}
        <button style={{ ...buttonStyle, marginTop: 'auto', marginBottom: '20px' }}>
          <Link to="/login-page">
            <img src={LogoutIcon} alt="Logout Icon" style={{ filter: 'brightness(0) saturate(100%) invert(62%) sepia(99%) saturate(7200%) hue-rotate(337deg) brightness(118%) contrast(100%)' }} />
          </Link>
        </button>
      </div>
      {/* Main content */}
      <div style={{ flex: 1, paddingTop: '45px', backgroundColor: '#F3F6FC', overflowX: 'hidden', position: 'relative' }}>
        {/* Admin Dashboard title and help link */}
        <div style={{ backgroundColor: '#273967', height: '45px', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          <h4 style={{ color: 'white', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 300, position: 'absolute', width: '50%', top: 0, left: '-80px', zIndex: 2, paddingLeft: '95px' }}>ADMIN DASHBOARD</h4>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '10px', color: 'white', fontFamily: 'Inter, sans-serif' }}>
            <Link to="/help-page">
              <h6 style={{ textDecoration: 'none', color: 'white', position: 'absolute', width: '100%', top: '13px', left: '-40px', zIndex: 2 }}>HELP</h6>
            </Link>
          </div>
        </div>
        {/* Department content */}
        {(activeButton === 0) && (
          <div style={{ padding: '20px' }}>
            <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>DASHBOARD</h2>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid ##E5E5E5', borderRadius: '15px', padding: '20px', marginTop: '20px', display: 'flex', alignItems: 'center' }}>
            <Link to="/add-department"> 
            
              <button style={{ width: '181px', height: '58px', backgroundColor: '#02D0C2', border: 'none', color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '15px', marginLeft: '40px' }}>Add Department</button>
              </Link>
              <p style={{ color: '#02D0C2', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', marginLeft: 'auto', marginRight: '40px' }}>5 Departments Available</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <DepartmentList />
            </div>
          </div>
        )}
        {/* Appointment content */}
        {(activeButton === 1) && (
          <div style={{ padding: '20px' }}>
            <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>APPOINTMENTS</h2>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid ##E5E5E5', borderRadius: '15px', padding: '20px', marginTop: '20px', display: 'flex', alignItems: 'center' }}>
              <Link to="/new-appointment">
                <button style={{ width: '181px', height: '58px', backgroundColor: '#02D0C2', border: 'none', color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '15px', marginLeft: '40px' }}>NEW APPOINTMENTS</button>
              </Link>
              <p style={{ color: '#02D0C2', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', marginLeft: 'auto', marginRight: '40px' }}>Total Appointments : 10</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <ApppointmentList />
            </div>
          </div>
        )}
        {/* Doctor content */}
        {(activeButton === 2) && (
          <div style={{ padding: '20px' }}>
            <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>ADD DOCTOR</h2>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid ##E5E5E5', borderRadius: '15px', padding: '20px', marginTop: '20px', display: 'flex', alignItems: 'center' }}>
              <button style={{ width: '181px', height: '58px', backgroundColor: '#02D0C2', border: 'none', color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '15px', marginLeft: '40px' }}>VIEW DOCTOR</button>
              <p style={{ color: '#02D0C2', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', marginLeft: 'auto', marginRight: '40px' }}>Number of Doctor : 15</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <DoctorList />
            </div>
          </div>
        )}
        {/* Doctor- assign content */}
        {/* {(activeButton === 3) && (
          <div style={{ padding: '20px' }}>
            <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>ASSIGN DOCTOR</h2>
            <div style={{ marginTop: '20px' }}>
              <AssignDoctors />
            </div>
          </div>
        )} */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

const buttonStyle = {
  display: 'block',
  width: '45px',
  height: '45px',
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  marginBottom: '60px', // Margin between buttons
  position: 'relative',
};

const circleContainer = {
  position: 'relative',
  width: '45px',
  height: '45px',
};

const redCircle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '44px', // Increased width
  height: '44px', // Increased height
  borderRadius: '50%',
  backgroundColor: '#02D0C2', // Changed circle color
};

const iconStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20px', // Adjust icon size as needed
  height: '20px', // Adjust icon size as needed
};

const activeIconStyle = {
  ...iconStyle,
  filter: 'invert(100%)', // Change icon color to white
};

export default AdminDashboard;
