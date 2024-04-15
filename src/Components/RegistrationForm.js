import React, { useState } from 'react';
import axios from 'axios';
import "./RegistrationForm.css";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        userType: '',
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {            
            const response = await axios.post('http://localhost:5000/register', formData);
            console.log(response.data); // log response from the backend
            alert('Registration successful'); // Handle success
        } catch (error) {
            console.error('Error:', error.response?.data || error.message); // log error response from the backend or error message
            alert('Registration failed. Please try again.'); // Handle error
        }
    };

    return (
        <div className="registration-form-container">
            <h2 className="registration-form-heading">Registration Form</h2>
            <form onSubmit={handleSubmit} className='registration-form'>
                <div className="registration-form-group">
                    <label htmlFor="userType" className="registration-form-label">User Type:</label>
                    <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        required
                        className="registration-form-input"
                    >
                        <option value="">Select User Type</option>
                        <option value="doctor">Doctor</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="registration-form-group">
                    <label htmlFor="username" className="registration-form-label">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="registration-form-input"
                    />
                </div>
                <div className="registration-form-group">
                    <label htmlFor="email" className="registration-form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="registration-form-input"
                    />
                </div>
                <div className="registration-form-group">
                    <label htmlFor="password" className="registration-form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="registration-form-input"
                    />
                </div>
                <button type="submit" className="registration-form-button">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
