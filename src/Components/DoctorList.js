import React, { useState, useEffect } from 'react';
import './DoctorList.css';
import axios from 'axios'; // Assuming you're using axios for HTTP requests

// Create an Axios instance with base URL set to http://localhost:5000/api
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    email: '',
    password: '',
    qualification: '',
    experience: '',
    department: ''
  });
  const [updateIndex, setUpdateIndex] = useState(null);

  // Fetch all doctors' data when the component mounts
  useEffect(() => {
    fetchDoctors();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  const fetchDoctors = () => {
    axiosInstance.get('/doctors')
      .then(response => {
        console.log('Doctors data:', response.data); // Log the received data
        setDoctors(response.data); // Update doctors state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  };
  

  const removeDoctor = (index) => {
    axiosInstance.delete(`/doctors/${doctors[index]._id}`)
      .then(() => {
        const updatedDoctors = [...doctors];
        updatedDoctors.splice(index, 1);
        setDoctors(updatedDoctors);
      })
      .catch(error => {
        console.error('Error removing doctor:', error);
      });
  };

  const Approve = (index) => {
    
  
    const approve = doctors[index];
    axiosInstance.post('/doctorc', approve)
      .then(response => {
        alert('Doctor Approved');

      }
    )
   
      .catch(error => {
        console.error('Error copying data to another collection:', error);
      });
      const loginData = {
        email: approve.email,
        password: approve.password, // Include password for the login collection
        type: 'Doctor',
        userselect:0
      };
      axiosInstance.post('/login', loginData)
      {removeDoctor(index)}
  };

  
  return (
    <div>
      <h2>LIST OF DOCTORS</h2>
      <button onClick={fetchDoctors}>View Doctors</button>
      <table className="doctor-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Password</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.name}</td>
              <td>{doctor.email}</td>
              <td>{doctor.password}</td>
              <td>{doctor.qualification}</td>
              <td>{doctor.experience}</td>
              <td>{doctor.department}</td>
              <td>
                <button onClick={() => removeDoctor(index)}>Reject</button>

                <button onClick={() => Approve(index)}>Approve</button>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
