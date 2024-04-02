import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !date || !time) {
      setError('All fields are required');
      return;
    }

    // Additional validation logic can be added here

    // If all validations pass, proceed with booking appointment
    console.log('Appointment booked!');
  };

  return (
    <div className="appointment-form-container">
      <h2>Book an Appointment</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
