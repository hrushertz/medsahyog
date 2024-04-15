import React, { useState } from 'react';
import axios from 'axios';
import './DoctorList.css';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

const PatientList1 = () => {
  const [patient, setPatient] = useState([]);
  const [newPatient, setNewPatient] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    phno: '',
    history: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const addOrUpdatePatient = () => {
    const { name, email, password, age, gender, phno, history } = newPatient;
    if (!name || !email || !password || !age || !gender || !phno || !history) {
      alert('Please fill in all fields');
      return;
    }
  
    const requestData = { ...newPatient };
    const requestMethod = editIndex !== null ? 'put' : 'post';
    const url = editIndex !== null ? `/patient/${patient[editIndex]._id}` : '/patient';
  
    axiosInstance[requestMethod](url, requestData)
      .then(response => {
        if (editIndex !== null) {
          const updatedPatientList = [...patient];
          updatedPatientList[editIndex] = response.data;
          setPatient(updatedPatientList);
        } else {
          setPatient([...patient, response.data]);
        }
        setEditIndex(null);
        setNewPatient({
          name: '',
          email: '',
          password: '',
          age: '',
          gender: '',
          phno: '',
          history: ''
        });
  
        // Copy email and password to login collection
        const loginData = {
          email,
          password,
          type: 'Patient',
          userselect:0
        };
        axiosInstance.post('/login', loginData)
          .then(loginResponse => {
            console.log('Email and password copied to login collection:', loginResponse.data);
          })
          .catch(loginError => {
            console.error('Error copying email and password to login collection:', loginError);
          });
      })
      .catch(error => {
        console.error('Error adding/updating patient:', error);
        // Implement error handling logic here
      });
  };

  return (
    <div>
      <h2>Patient Details</h2>
      <form>
        <input type="text" name="name" placeholder="Name" value={newPatient.name} onChange={handleInputChange} />
        <input type="text" name="email" placeholder="E-mail" value={newPatient.email} onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Password" value={newPatient.password} onChange={handleInputChange} />
        <input type="text" name="age" placeholder="Age" value={newPatient.age} onChange={handleInputChange} />

        <div>
          <input type="radio" name="gender" value="Male" checked={newPatient.gender === "Male"} onChange={handleInputChange} />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" value="Female" checked={newPatient.gender === "Female"} onChange={handleInputChange} />
          <label htmlFor="female">Female</label>
        </div>

        <input type="text" name="phno" placeholder="Phone Number" value={newPatient.phno} onChange={handleInputChange} />
        <input type="text" name="history" placeholder="History" value={newPatient.history} onChange={handleInputChange} />
        <button type="button" onClick={addOrUpdatePatient}>{editIndex !== null ? 'Update Patient' : 'Add Patient'}</button>
      </form>
    </div>
  );
};

export default PatientList1;
