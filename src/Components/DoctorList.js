import React, { useState } from 'react';
import './DoctorList.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    specialization: '',
    experience: '',
    consultationFee: '',
    timing: ''
  });
  const [updateIndex, setUpdateIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };

  const addDoctor = () => {
    if (newDoctor.name && newDoctor.specialization && newDoctor.experience && newDoctor.consultationFee && newDoctor.timing) {
      if (updateIndex !== null) {
        const updatedDoctors = [...doctors];
        updatedDoctors[updateIndex] = newDoctor;
        setDoctors(updatedDoctors);
        setUpdateIndex(null);
      } else {
        setDoctors([...doctors, newDoctor]);
      }
      setNewDoctor({ name: '', specialization: '', experience: '', consultationFee: '', timing: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const removeDoctor = (index) => {
    const updatedDoctors = [...doctors];
    updatedDoctors.splice(index, 1);
    setDoctors(updatedDoctors);
  };

  const handleUpdate = (index) => {
    setUpdateIndex(index);
    setNewDoctor(doctors[index]);
  };

  return (
    <div>
      <h2>List of Doctors</h2>
      <table className="doctor-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Consultation Fee</th>
            <th>Timing</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.experience}</td>
              <td>{doctor.consultationFee}</td>
              <td>{doctor.timing}</td>
              <td>
                <button onClick={() => removeDoctor(index)}>Remove</button>
                <button onClick={() => handleUpdate(index)}>Update</button>
              </td>
            </tr>
          ))}
          <tr>
            <td><input type="text" name="name" placeholder="Name" value={newDoctor.name} onChange={handleInputChange} /></td>
            <td><input type="text" name="specialization" placeholder="Specialization" value={newDoctor.specialization} onChange={handleInputChange} /></td>
            <td><input type="text" name="experience" placeholder="Experience" value={newDoctor.experience} onChange={handleInputChange} /></td>
            <td><input type="text" name="consultationFee" placeholder="Consultation Fee" value={newDoctor.consultationFee} onChange={handleInputChange} /></td>
            <td><input type="text" name="timing" placeholder="Timing" value={newDoctor.timing} onChange={handleInputChange} /></td>
            <td><button onClick={addDoctor}>{updateIndex !== null ? 'Update Doctor' : 'Add Doctor'}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
