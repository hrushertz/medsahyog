import React, { useState } from 'react';
import DepartmentIcon from '../Assets/DepartmentIcon.svg';
import AppointmentsIcon from '../Assets/AppointmentsIcon.svg';
import DoctorsIcon from '../Assets/DoctorsIcon.svg';
import AssignDoctorIcon from '../Assets/AssignDoctorIcon.svg';
import LogoutIcon from '../Assets/LogoutIcon.svg';

const AdminDashboard = () => {
  const [activeButton, setActiveButton] = useState(null);

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
    <div style={{ position: 'relative', display: 'flex' }}>
      {/* Side panel */}
      <div style={{ backgroundColor: 'white', width: '95px', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '45px' }}>
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
          <img src={LogoutIcon} alt="Logout Icon" style={{ filter: 'brightness(0) saturate(100%) invert(62%) sepia(99%) saturate(7200%) hue-rotate(337deg) brightness(118%) contrast(100%)' }} />
        </button>
      </div>
      {/* Main content */}
      <div style={{ paddingTop: '45px', backgroundColor: '#F3F6FC', overflowX: 'hidden', flex: 1 }}>
        {/* Main content goes here */}
        <div style={{ backgroundColor: '#273967', height: '45px', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          {/* Help text */}
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '10px', color: 'white', fontFamily: 'Inter, sans-serif' }}>
            <a href="https://google.com" style={{ textDecoration: 'none', color: 'white' }}>Help</a>
          </div>
        </div>
        <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold', position: 'absolute', width: '100%', top: '90px', left: '120px', zIndex: 2 }}>DASHBOARD</h2>
        <div style={{ backgroundColor: 'yellow', width: '1500px', height: '106px', position: 'absolute', top: '166px', left: 'calc(50% + 30px)', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <button style={{ width: '181px', height: '58px', backgroundColor: '#02D0C2', border: 'none', color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '15px', marginLeft: '40px' }}>Add Department</button>
        </div>
        <h2 style={{ color: 'white', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 300, position: 'absolute', width: '100%', top: 0, left: 0, zIndex: 2, paddingLeft: '95px' }}>ADMIN DASHBOARD</h2>
      </div>
    </div>
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
