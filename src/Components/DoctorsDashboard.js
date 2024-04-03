import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentsIcon from '../Assets/AppointmentsIcon.svg';
import DoctorList from '../Components/DoctorList';
import ShowAppointedList from './ShowAppointedList';

const DoctorsDashboard = () => {
  const [availability, setAvailability] = useState('Available');

  const handleStatusChange = (e) => {
    setAvailability(e.target.value);
  };

  return (
    <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Main content */}
        <div style={{ flex: 1, paddingTop: '45px', backgroundColor: '#F3F6FC', overflowX: 'hidden', position: 'relative' }}>
          {/* Doctors Dashboard title */}
          <div style={{ backgroundColor: '#273967', height: '45px', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
            <h4 style={{ color: 'white', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 300, paddingLeft: '20px' }}>DOCTORS DASHBOARD</h4>
          </div>
          {/* Appointment content */}
          <div style={{ padding: '20px' }}>
            <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>WELCOME DOCTOR</h2>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid ##E5E5E5', borderRadius: '15px', padding: '20px', marginTop: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link to='/doctor-profile'>
                <button style={{ width: '181px', height: '58px', backgroundColor: '#02D0C2', border: 'none', color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '15px', marginBottom: '20px', marginRight: '20px' }}>VIEW PROFILE</button>
              </Link>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <label htmlFor="status" style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px', color: 'black' }}>Availability:</label>
                <select id="status" value={availability} onChange={handleStatusChange} style={{ width: '250px', height: '45px', backgroundColor: '#F2F2F2', border: 'none', marginBottom: '20px', borderRadius: '15px', color: '#02D0C2' }}>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>
            </div>
            <ShowAppointedList />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsDashboard;
