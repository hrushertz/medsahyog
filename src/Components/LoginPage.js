import React, { useState } from 'react';
import axios from 'axios';
import logo from '../Assets/Logo02.png'; // Update the path to your logo image
import { useNavigate } from 'react-router-dom';

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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
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
              <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: '100%', maxWidth: '200px', marginTop: '20px', borderRadius: '30px', backgroundColor: '#02D0C2', color: 'white', border: 'none' }}>Login</button>
                <button type="button" className="btn btn-secondary mt-3" onClick={createNewUser}>Create New User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
