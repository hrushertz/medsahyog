import React, { useState } from 'react';
import './DepartmentList.css';

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [newDepartment, setNewDepartment] = useState({
    name: '',
    description: ''
  });
  const [updateIndex, setUpdateIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment({ ...newDepartment, [name]: value });
  };

  const addDepartment = () => {
    if (newDepartment.name && newDepartment.description) {
      if (updateIndex !== null) {
        const updatedDepartments = [...departments];
        updatedDepartments[updateIndex] = newDepartment;
        setDepartments(updatedDepartments);
        setUpdateIndex(null);
      } else {
        setDepartments([...departments, newDepartment]);
      }
      setNewDepartment({ name: '', description: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const removeDepartment = (index) => {
    const updatedDepartments = [...departments];
    updatedDepartments.splice(index, 1);
    setDepartments(updatedDepartments);
  };

  const handleUpdate = (index) => {
    setUpdateIndex(index);
    setNewDepartment(departments[index]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <h2 style={{fontFamily: 'Inter, sans-serif', marginTop: '50px'}}>ADD DEPARTMENT</h2>
      <table className="department-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={index}>
              <td>{department.name}</td>
              <td>{department.description}</td>
              <td>
                <button onClick={() => removeDepartment(index)}>Remove</button>
                <button onClick={() => handleUpdate(index)}>Update</button>
              </td>
            </tr>
          ))}
          <tr>
            <td><input type="text" name="name" placeholder="Name" value={newDepartment.name} onChange={handleInputChange} /></td>
            <td><input type="text" name="description" placeholder="Description" value={newDepartment.description} onChange={handleInputChange} /></td>
            <td><button onClick={addDepartment}>{updateIndex !== null ? 'Update Department' : 'Add Department'}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
