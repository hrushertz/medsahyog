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
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ position: 'absolute', top: '-20vh', left: 0, right: 0, bottom: 0 }}>
        <img src={logo} alt="Medsahyog Logo" style={{ width: '200px', marginBottom: '40px' }} />
        <div className="card" style={{ width: '100%', maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '15px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(100px)' }}>
          <div className="card-body p-5 text-center">
            <h2 className="card-title mb-4" style={{ color: '#02D0C2', fontWeight: 'bold' }}>Welcome to Medsahyog</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  style={{ width: '100%', maxWidth: '485px', height: '45px', backgroundColor: '#F2F2F2', border: 'none', marginBottom: '20px', borderRadius: '15px' }}
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
                  style={{ width: '100%', maxWidth: '485px', height: '45px', backgroundColor: '#F2F2F2', border: 'none', marginBottom: '20px', borderRadius: '15px' }}
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
                  style={{ width: '100%', maxWidth: '485px', height: '45px', backgroundColor: '#F2F2F2', border: 'none', marginBottom: '20px', borderRadius: '15px', color: '#02D0C2' }}
                >
                  <option value="admin">Admin</option>
                  <option value="doctor">Doctor</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="text-center">
                <Link to="/admin-page">
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', maxWidth: '200px', marginTop: '20px', borderRadius: '30px', backgroundColor: '#02D0C2', color: 'white', border: 'none' }}>Login</button>
                </Link>
              </div>
            </form>
            <p style={{ marginTop: '10px' }}>New users <Link to="/registration-page">register here</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
