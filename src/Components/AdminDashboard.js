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

const AdminDashboard = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false); // State for controlling AppointmentForm visibility

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const buttons = [
    { icon: DepartmentIcon, alt: 'Department Icon' },
    { icon: AppointmentsIcon, alt: 'Appointments Icon' },
    { icon: DoctorsIcon, alt: 'Doctors Icon' },
    { icon: AssignDoctorIcon, alt: 'Assign Doctor Icon' }
  ];

  // Sample number of available departments
  const availableDepartments = 5;
  const availableAppointments = 10;
  const totDoctor = 15;

  // Sample department data
//   const departmentData = [
//     { id: 1, name: 'Department A', dateAdded: '2024-03-30' },
//     { id: 2, name: 'Department B', dateAdded: '2024-03-30' },
//     { id: 3, name: 'Department C', dateAdded: '2024-03-30' }
//   ];

  return (
    <div style={{ position: 'relative', display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      {/* Side panel */}
      <div style={{ backgroundColor: '#dce6f5', width: '95px', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '45px' }}>
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
      <div style={{ paddingTop: '45px', backgroundColor: '#F3F6FC', overflowX: 'hidden', flex: 1 }}>
        {/* Admin Dashboard title and help link */}
        <div style={{ backgroundColor: '#273967', height: '45px', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <h2 style={{ color: 'white', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 300, position: 'absolute', width: '50%', top: 0, left: 0, zIndex: 2, paddingLeft: '95px' }}>ADMIN DASHBOARD</h2>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '10px', color: 'white', fontFamily: 'Inter, sans-serif' }}>
            <a href="https://google.com" style={{ textDecoration: 'none', color: 'white' }}>Help</a>
          </div>
        </div>
        {/* Department content */}
        {(activeButton === 0) && (
          <>
            <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold',position: 'absolute', width: '50%', top: '90px', left: '120px', zIndex: 2 }}>DASHBOARD</h2>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid ##E5E5E5',borderRadius:'15px', width: '1500px', height: '106px', position: 'absolute', top: '166px', left: 'calc(50% + 30px)', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', alignItems: 'center' }}>
              <button style={{ width: '181px', height: '58px', backgroundColor: '#02D0C2', border: 'none', color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '15px', marginLeft: '40px' }}>Add Department</button>
              <p style={{ color: '#02D0C2', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', marginLeft: 'auto', marginRight: '40px' }}>{availableDepartments} Departments Available</p>
            </div>
            {/* <div style={{ color: '#02D0C2', fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 'bold', position: 'absolute', top: '300px', left: 'calc(50% - 640px + 20px)', transform: 'translateX(-50%)', zIndex: 2 }}>DEPARTMENT LIST</div> */}
            <div style={{ position: 'absolute', top: '300px', width: '1500px', left: 'calc(50% - 0px + 20px)', transform: 'translateX(-50%)', zIndex: 2 }}>
              <DepartmentList />
            </div>
            {/* <table style={{ color: 'black', fontFamily: 'Inter, sans-serif', fontSize: '16px', position: 'absolute', top: '340px', left: 'calc(50% - 0px + 20px)', transform: 'translateX(-50%)', zIndex: 2 }}>
              <thead>
                <tr style={{ textAlign: 'center', border: '1px solid #000' }}>
                  <th style={{ width: '300px', border: '1px solid #000', backgroundColor: '#273967', color: '#02D0C2' }}>Department ID</th>
                  <th style={{ width: '300px', border: '1px solid #000', backgroundColor: '#273967', color: '#02D0C2' }}>Department Name</th>
                  <th style={{ width: '300px', border: '1px solid #000', backgroundColor: '#273967', color: '#02D0C2' }}>Date of Added</th>
                  <th style={{ width: '300px', border: '1px solid #000', backgroundColor: '#273967', color: '#02D0C2' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {departmentData.map((department, index) => (
                  <tr key={index} style={{ textAlign: 'center', height: '50px', border: '1px solid #000' }}>
                    <td style={{ border: '1px solid #000' }}>{department.id}</td>
                    <td style={{ border: '1px solid #000' }}>{department.name}</td>
                    <td style={{ border: '1px solid #000' }}>{department.dateAdded}</td>
                    <td style={{ border: '1px solid #000' }}>
                      <button style={{ marginRight: '10px',  backgroundColor: '#02D0C2', border: 'none', color: 'white', fontFamily: 'Inter, sans-serif', cursor: 'pointer', borderRadius: '5px' }}>Edit</button>
                      <button style={{ marginRight: '10px', backgroundColor: '#02D0C2', border: 'none', color: 'white', fontFamily: 'Inter, sans-serif', cursor: 'pointer', borderRadius: '5px' }}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </>
        )}
      </div>
      {/* Appointment content */}
      {(activeButton === 1) && (
          <>
          <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold', position: 'absolute', width: '50%', top: '90px', left: '120px', zIndex: 2 }}>APPOINTMENTS</h2>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid ##E5E5E5', borderRadius: '15px', width: '1500px', height: '106px', position: 'absolute', top: '166px', left: 'calc(50% + 30px)', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', alignItems: 'center' }}>
            {/* Corrected onClick handler */}
            <Link to="/new-appointment">
                <button style={{ width: '181px', height: '58px', backgroundColor: '#02D0C2', border: 'none', color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '15px', marginLeft: '40px' }} onClick={() => setShowAppointmentForm(true)}>NEW APPOINTMENTS</button>
            </Link>
            <p style={{ color: '#02D0C2', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', marginLeft: 'auto', marginRight: '40px' }}>Total Appointments : {availableAppointments}</p>
            <div style={{ position: 'absolute', top: '150px', width: '1500px', left: 'calc(50% - 0px + 20px)', transform: 'translateX(-50%)', zIndex: 2 }}>
              <ApppointmentList />
            </div>
          </div>
        </>
          
        )}
        {/* Doctor content */}
      {(activeButton === 2) && (
          <>
            <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold',position: 'absolute', width: '50%', top: '90px', left: '120px', zIndex: 2 }}>ADD DOCTOR</h2>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid ##E5E5E5',borderRadius:'15px', width: '1500px', height: '106px', position: 'absolute', top: '166px', left: 'calc(50% + 30px)', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', alignItems: 'center' }}>
              <button style={{ width: '181px', height: '58px', backgroundColor: '#02D0C2', border: 'none', color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '15px', marginLeft: '40px' }}>VIEW DOCTOR</button>
              <p style={{ color: '#02D0C2', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', marginLeft: 'auto', marginRight: '40px' }}>Number of Doctor : {totDoctor}</p>
              <div style={{position: 'absolute', top: '150px',width: '1500px', left: 'calc(50% - 0px + 20px)', transform: 'translateX(-50%)', zIndex: 2 }}>
              <DoctorList />
              </div>
            </div>
          </>
          
        )}

         {/* Doctor- assign content */}
      {(activeButton === 3) && (
          <>
            <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold',position: 'absolute', width: '50%', top: '90px', left: '120px', zIndex: 2 }}>ASSIGN DOCTOR</h2>
            <div style={{position: 'absolute', top: '150px',width: '1500px', left: 'calc(50% - 0px + 20px)', transform: 'translateX(-50%)', zIndex: 2 }}>
              <AssignDoctors />
              </div>
          </>
          
        )}
    {/* <div style={{ marginTop: 'auto'}}>
        <Footer />
    </div> */}
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
