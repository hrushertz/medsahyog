import React, { useState } from 'react';
import axios from 'axios';

const AddDepartmentForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !description) {
      setError('All fields are required');
      return;
    }

    try {
      // Send POST request to backend endpoint
      const response = await axios.post('http://localhost:5000/api/departments', {
        name,
        description
      });

      // Handle success
      console.log(response.data); // Log success message or data received from backend
      // Optionally, reset form fields or display success message to the user
      window.alert("Department added successfully");
    } catch (error) {
      // Handle error
      console.error('Error:', error.response?.data || error.message); // Log error response from the backend or error message
      setError('Failed to add department. Please try again.'); // Set error message to display to the user
    }
  };

  return (
    <div className="add-department-form-container">
      <h2>Add Department</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add Department</button>
      </form>
    </div>
  );
};

export default AddDepartmentForm;
