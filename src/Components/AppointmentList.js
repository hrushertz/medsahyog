import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AppointmentList.css';
import BackgroundSVG from '../Assets/background_al.svg'; 
import Navbar from './Navbar';
import Footer from './Footer';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Fetch the current user's patient ID
        const response = await axios.get('http://localhost:5000/api/currentuserpat');
        const patientId = response.data._id;

        // Fetch appointments for the specific patient
        const appointmentsResponse = await axios.get(`http://localhost:5000/api/appointmentslist?patientId=${patientId}`);
        
        // Modify date format
        const formattedAppointments = appointmentsResponse.data.map(appointment => {
          const formattedDate = new Date(appointment.date).toLocaleDateString('en-US');
          return { ...appointment, date: formattedDate };
        });

        setAppointments(formattedAppointments);
      } catch (error) {
        setError('Error fetching appointments');
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
   <> 

    <Navbar/>
    <div className="AppointmentList">
      <h2>APPOINTMENT LIST</h2>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment._id}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="background-svg"></div> {/* Empty div for SVG background */}
    </div>
    <Footer/>
</>
    
  );
}

export default AppointmentList;
