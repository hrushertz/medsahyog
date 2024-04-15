import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        setAppointments(appointmentsResponse.data);
      } catch (error) {
        setError('Error fetching appointments');
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="AppointmentList">
      <h2>Appointment List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>
            {/* Render appointment details here */}
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Doctor: {appointment.doctor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
