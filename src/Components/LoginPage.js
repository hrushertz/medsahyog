import React, { useState } from 'react';
import axios from 'axios';
import logo from '../Assets/Logo02.png'; // Update the path to your logo image
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Loginpage.css'

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('admin');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/loginn', {
        email,
        password,
        type
      });

      if (response.data.success) {
        // Navigate based on user type
        if (type === 'Admin') {
          navigate('/admin-page');
        } else if (type === 'Patient') {
          navigate('/patient-dashboard');
        } else if (type === 'Doctor') {
          navigate('/doctor-page');
        }
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Login failed. Please try again.');
    }
  };

  const createNewUser = () => {
    navigate('/user-create');
  };
  return (
    <>
      <Navbar />
      <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>

        <div className="login-container" style={{ backgroundColor: '#f3f6fc', padding: '20px', borderRadius: '15px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}>
        
          
          <form onSubmit={handleSubmit} className="login-form" style={{ width: '100%', maxWidth: '400px' }}>
          <img src={logo} alt="Medsahyog Logo" className="logo" style={{ width: '300px', marginBottom: '20px' }} />

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <select
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="Admin">Admin</option>
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', borderRadius: '5px', backgroundColor: '#02d0c2', border: 'none' }}>Login</button>
            <button type="button" className="btn btn-primary" onClick={createNewUser} style={{ width: '100%', marginTop: '10px', borderRadius: '5px', backgroundColor: '#02d0c2', border: 'none' }}>Create New User</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
  
  
};

export default LoginPage;
