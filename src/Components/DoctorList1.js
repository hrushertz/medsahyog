import React, { useState, useEffect } from 'react';
import './DoctorList.css';
import axios from 'axios'; // Assuming you're using axios for HTTP requests

// Create an Axios instance with base URL set to http://localhost:5000/api
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

const DoctorList1 = () => {
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

  const [departments, setDepartments] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };
  useEffect(() => {
    // Fetch departments from the backend when the component mounts
    axiosInstance.get('/departments')
      .then(response => {
        // Set the departments state with the fetched data
        setDepartments(response.data);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
  }, []);
  const addDoctor = () => {
    if (newDoctor.name && newDoctor.email && newDoctor.password && newDoctor.qualification && newDoctor.experience && newDoctor.department) {
      if (updateIndex !== null) {
        axiosInstance.put(`/doctors/${doctors[updateIndex]._id}`, newDoctor)
          .then(response => {
            const updatedDoctors = [...doctors];
            updatedDoctors[updateIndex] = response.data;
            setDoctors(updatedDoctors);
            setUpdateIndex(null);
            setNewDoctor({ name: '', email: '',password: '',qualification: '', experience: '', department: '' });
          })
          .catch(error => {
            console.error('Error updating doctor:', error);
          });
      } else {
        axiosInstance.post('/doctors', newDoctor)
          .then(response => {
            setDoctors([...doctors, response.data]);
            setNewDoctor({ name: '', email: '',password: '',qualification: '', experience: '', department: '' });
          })
          .catch(error => {
            console.error('Error adding doctor:', error);
          });
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="doctor-list-container">
      <h2>DOCTOR DETAILS</h2>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" name="name" placeholder="Name" value={newDoctor.name} onChange={handleInputChange} /></td>
            <td><input type="text" name="email" placeholder="E-mail" value={newDoctor.email} onChange={handleInputChange} /></td>
            <td><input type="password" name="password" placeholder="Password" value={newDoctor.password} onChange={handleInputChange} /></td>
            <td><input type="text" name="qualification" placeholder="Qualification" value={newDoctor.qualification} onChange={handleInputChange} /></td>
            <td><input type="text" name="experience" placeholder="Experience" value={newDoctor.experience} onChange={handleInputChange} /></td>
            <td>
              <select name="department" value={newDoctor.department} onChange={handleInputChange}>
                <option value="">Select Department</option>
                {departments.map(department => (
                  <option key={department._id} value={department.name}>{department.name}</option>
                ))}
              </select>
            </td>
            <td><button onClick={addDoctor}>{updateIndex !== null ? 'Update Doctor' : 'Add Doctor'}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList1;
