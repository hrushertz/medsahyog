// LoginPage.js

import React, { useState } from 'react';
import logo from '../Assets/Logo02.png'; // Update the path to your logo image
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // State for storing form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin'); // Default user type is admin

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('User Type:', userType);
    // Add your authentication logic here
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: '#F3F6FC', position: 'relative' }}>
      {/* Top strip */}
      {/* <div style={{ backgroundColor: '#273967', height: '20px', width: '100%', position: 'absolute', top: 0 }}></div> */}
      {/* Logo */}
      <img src={logo} alt="Medsahyog Logo" style={{ position: 'absolute', top: '60px', left: '50%', transform: 'translateX(-50%)', zIndex: 1, width: '200px' }} /> {/* Adjust the top position of the logo */}
      {/* Card */}
      <div className="card" style={{ width: '732px', height: '446px', backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '15px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px', backdropFilter: 'blur(100px)' }}>
        <div className="card-body p-5 text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0px' }}>
          <h2 className="card-title mb-4" style={{ color: '#02D0C2', fontWeight: 'bold' }}>Welcome to Medsahyog</h2>
          <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                style={{ width: '485px', height: '45px', backgroundColor: '#F2F2F2', border: 'none', marginBottom: '20px', borderRadius: '15px' }} // Updated color to lighter grey
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                style={{ width: '485px', height: '45px', backgroundColor: '#F2F2F2', border: 'none', marginBottom: '20px', borderRadius: '15px' }} // Updated color to lighter grey
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                style={{ width: '485px', height: '45px', backgroundColor: '#F2F2F2', border: 'none', marginBottom: '20px', borderRadius: '15px', color: '#02D0C2' }} // Updated color to lighter grey
              >
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="text-center">
            <Link to="/admin-page">
              <button type="submit" className="btn btn-primary" style={{ width: '200px', marginTop: '20px', borderRadius: '30px', backgroundColor: '#02D0C2', color: 'white', border: 'none' }}>Login</button>
            </Link>
            </div>
          </form>
        </div>
      </div>
      {/* Bottom strip */}
      {/* <div style={{ backgroundColor: '#273967', height: '20px', width: '100%', position: 'absolute', bottom: 0 }}></div> */}
      {/* Copyright text */}
      <p style={{ color: '#273967', fontSize: '14px', textAlign: 'center', position: 'absolute', bottom: '30px', width: '100%' }}>Copyrights © 2023-2024 All Rights Reserved.</p>
    </div>
  );
};

export default LoginPage;
