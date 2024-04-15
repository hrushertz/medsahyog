import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DoctorsDashboard.css';
import Navbar from './Navbar';
import Footer from './Footer';

function DoctorsDashboard() {
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/doctorc');
                setDoctor(response.data);
            } catch (error) {
                console.error('Error fetching doctor details:', error);
            }
        };

        fetchDoctorDetails();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.put('http://localhost:5000/api/logout');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <>

        <Navbar/> 
        <div className="DoctorsDashboard">
  <h1 className="dashboard-heading">DOCTOR PROFILE</h1>
  {doctor ? (
    <div className="doctor-info">
      <table className="doctor-table">
        <tbody>
          <tr>
            <td>NAME</td>
            <td>{doctor.name}</td>
          </tr>
          <tr>
            <td>EMAIL</td>
            <td>{doctor.email}</td>
          </tr>
          <tr>
            <td>DEPARTMENT</td>
            <td>{doctor.department}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  ) : (
    <p>Loading... </p>
  )}
  <div className="button-container">
    <Link to="/doctor-availability">
      <button className="appointment-button">Appointment</button>
    </Link>
  </div>
</div>

        <Footer/>
        </>
    );
}

export default DoctorsDashboard;
