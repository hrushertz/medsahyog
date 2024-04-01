import React, { useState } from 'react';
import './AppointmentList.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });
  const [updateIndex, setUpdateIndex] = useState(null); // State to track the index of the appointment being updated

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const addAppointment = () => {
    if (newAppointment.name && newAppointment.email && newAppointment.date && newAppointment.time) {
      if (updateIndex !== null) {
        // If an appointment is being updated, replace it with the new appointment
        const updatedAppointments = [...appointments];
        updatedAppointments[updateIndex] = newAppointment;
        setAppointments(updatedAppointments);
        setUpdateIndex(null); // Reset the update index
      } else {
        // Add a new appointment
        setAppointments([...appointments, newAppointment]);
      }
      setNewAppointment({ name: '', email: '', date: '', time: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const removeAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  const handleUpdate = (index) => {
    // Set the index of the appointment being updated and populate the form fields with its data
    setUpdateIndex(index);
    setNewAppointment(appointments[index]);
  };

  return (
    <div>
      <h2>Appointments List</h2>
      <table className="appointment-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time Slot</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.name}</td>
              <td>{appointment.email}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <button onClick={() => removeAppointment(index)}>Remove</button>
                <button onClick={() => handleUpdate(index)}>Update</button>
              </td>
            </tr>
          ))}
          <tr>
            <td><input type="text" name="name" placeholder="Name" value={newAppointment.name} onChange={handleInputChange} /></td>
            <td><input type="email" name="email" placeholder="Email" value={newAppointment.email} onChange={handleInputChange} /></td>
            <td><input type="date" name="date" value={newAppointment.date} onChange={handleInputChange} /></td>
            <td><input type="time" name="time" value={newAppointment.time} onChange={handleInputChange} /></td>
            <td><button onClick={addAppointment} style={{backgroundColor: '#02D0C2'}}>{updateIndex !== null ? 'Update Appointment' : 'Add Appointment'}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
