import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function PatientDashboard() {
  const [patient, setPatient] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: 0,
    gender: '',
    phno: '',
    history: '',
    photo: null
  });

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/patient');
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient details:', error);
      }
    };

    fetchPatientDetails();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.put('http://localhost:5000/api/logout');
      // Optionally, perform any additional actions after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    
    formDataToSend.append('history', formData.history);
    if (formData.photo) {
      formDataToSend.append('photo', formData.photo);
    }

    try {
      const response = await axios.put('http://localhost:5000/api/patient', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setPatient(response.data);
    } catch (error) {
      console.error('Error updating patient details:', error);
    }
  };

  return (
    <div className="PatientDashboard">
      <h1>Patient Profile</h1>
      {patient ? (
        <div>
          <p>Name: {patient.name}</p>
          <p>Email: {patient.email}</p>
          <p>Age: {patient.age}</p>
          <p>Gender: {patient.gender}</p>
          <p>Phone Number: {patient.phno}</p>
          <p>Medical History: {patient.history}</p>
          <img src={`data:image/jpeg;base64,${patient.photo}`} alt="Patient" style={{ width: '100px', height: '100px' }} />
          <button onClick={handleLogout}>Logout</button>
          <form onSubmit={handleSubmit}>
            
            <input type="text" name="history" placeholder="Medical History" value={formData.history} onChange={handleChange} />
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button type="submit">Update</button>
          </form>
          <h1>Book an Appointment</h1>
            <Link to="/appointment-page">
                <button>Appointment</button>
            </Link>
            <Link to="/appointment-list">
        <button>Appointment List</button>
      </Link>
        </div>
      ) : (
        <p>Loading... </p>
      )}
    </div>
  );
}

export default PatientDashboard;
