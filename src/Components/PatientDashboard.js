import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PatientDashboard.css'
import Footer from './Footer';
import Navbar from './Navbar';

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
    <> 
    <Navbar/>
    <div className="PatientDashboard">
   <h4 class="profile-heading">PATIENT PROFILE</h4>

  
    {patient ? (
      <div>
      <div className="patient-details">
  <table>
    <tbody>
      <tr>
        <td className="label-cell"><strong>Name:</strong></td>
        <td className="value-cell">{patient.name}</td>
      </tr>
      <tr>
        <td className="label-cell"><strong>Email:</strong></td>
        <td className="value-cell">{patient.email}</td>
      </tr>
      <tr>
        <td className="label-cell"><strong>Age:</strong></td>
        <td className="value-cell">{patient.age}</td>
      </tr>
      <tr>
        <td className="label-cell"><strong>Gender:</strong></td>
        <td className="value-cell">{patient.gender}</td>
      </tr>
      <tr>
        <td className="label-cell"><strong>Phone Number:</strong></td>
        <td className="value-cell">{patient.phno}</td>
      </tr>
      <tr>
        <td className="label-cell"><strong>Medical History:</strong></td>
        <td className="value-cell">{patient.history}</td>
      </tr>
      <tr>
        <td colSpan="2" className="image-cell"><img src={`data:image/jpeg;base64,${patient.photo}`} alt="Patient" /></td>
      </tr>
      <tr>
        <td colSpan="2" className="button-cell"><button onClick={handleLogout}>Logout</button></td>
      </tr>
    </tbody>
  </table>
</div>


<form onSubmit={handleSubmit} className='form-container' style={{ maxWidth: '800px',backgroundColor:'white' }}>
  <input type="text" name="history" placeholder="Medical History" value={formData.history} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
  <input type="file" accept="image/*" onChange={handleFileChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
  <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#02D0C2', color: 'white', fontWeight: 'bold' }}>Update</button>
</form>



          <h2 className='appointment-heading'>BOOK AN APPOINTMENT</h2>
          <div className="button-container">
  <Link to="/appointment-page">
    <button className="appointment-button">Appointment</button>
  </Link>
  <Link to="/appointment-list">
    <button className="appointment-button">Appointment List</button>
  </Link>
</div>

        
        
      </div>
    ) : (
      <p className="loading-message">Loading...</p>
    )}
  </div>
  <Footer/>
  </>
  
  );
}

export default PatientDashboard;
