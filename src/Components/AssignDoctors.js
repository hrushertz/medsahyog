import React, { useState } from 'react';
import './AssignDoctors.css'; // Define your CSS styles for the form here

const AssignDoctors = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    appointmentId: '',
    patientName: '',
    reason: '',
    timeSlot: '',
    doctor: ''
  });
  const [updateIndex, setUpdateIndex] = useState(null); // State to track the index of the appointment being updated

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const addAppointment = () => {
    if (newAppointment.appointmentId && newAppointment.patientName && newAppointment.reason && newAppointment.timeSlot && newAppointment.doctor) {
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
      setNewAppointment({ appointmentId: '', patientName: '', reason: '', timeSlot: '', doctor: '' });
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
      {/* <h2>Assign Doctors</h2> */}
      <table className="assign-doctors">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Patient Name</th>
            <th>Reason</th>
            <th>Time Slot</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.appointmentId}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.timeSlot}</td>
              <td>{appointment.doctor}</td>
              <td>
                <button onClick={() => removeAppointment(index)}>Remove</button>
                <button onClick={() => handleUpdate(index)}>Update</button>
              </td>
            </tr>
          ))}
          <tr>
            <td><input type="text" name="appointmentId" placeholder="Appointment ID" value={newAppointment.appointmentId} onChange={handleInputChange} /></td>
            <td><input type="text" name="patientName" placeholder="Patient Name" value={newAppointment.patientName} onChange={handleInputChange} /></td>
            <td><input type="text" name="reason" placeholder="Reason" value={newAppointment.reason} onChange={handleInputChange} /></td>
            <td><input type="time" name="timeSlot" value={newAppointment.timeSlot} onChange={handleInputChange} /></td>
            <td>
              <select name="doctor" value={newAppointment.doctor} onChange={handleInputChange}>
                <option value="">Select Doctor</option>
                <option value="">1</option>
                <option value="">2</option>
                {/* Add options for available doctors */}
              </select>
            </td>
            <td><button onClick={addAppointment} style={{backgroundColor: '#02D0C2'}}>{updateIndex !== null ? 'Update Assignment' : 'Assign Doctor'}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AssignDoctors;
