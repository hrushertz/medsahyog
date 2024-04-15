import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch patients data when the component mounts
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/patient');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    // Fetch doctors data when the component mounts
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctorc');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchPatients();
    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!selectedPatient || !selectedDoctor || !date || !time || !reason) {
      setError('All fields are required');
      return;
    }

    try {
      // Send POST request to backend endpoint
      const response = await axios.post('http://localhost:5000/api/appointments', {
        patientId: selectedPatient,
        doctorId: selectedDoctor,
        date,
        time,
        reason
      });

      // Handle success
      console.log(response.data);
      window.alert("Appointment is successful");
      // Optionally, reset form fields or display success message to the user
      setSelectedPatient('');
      setSelectedDoctor('');
      setDate('');
      setTime('');
      setReason('');
    } catch (error) {
      // Handle error
      console.error('Error:', error.response?.data || error.message);
      setError('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="appointment-form-container">
      <h2>Book an Appointment</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patient">Patient:</label>
          <select id="patient" value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
            <option value="">Select a patient</option>
            {patients.map(patient => (
              <option key={patient._id} value={patient._id}>{patient.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="doctor">Doctor:</label>
          <select id="doctor" value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
            <option value="">Select a doctor</option>
            {doctors.map(doctor => (
              <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea id="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
