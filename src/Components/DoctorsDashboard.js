import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DoctorsDashboard() {
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/doctorc');
                setDoctor(response.data);
            } catch (error) {
                console.error('Error fetching doctor details:', error);
            }
        };

        fetchDoctorDetails();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.put('http://localhost:5000/api/logout');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className="DoctorsDashboard">
            <h1>Doctor Profile</h1>
            {doctor ? (
                <div>
                    <p>Name: {doctor.name}</p>
                    <p>Email: {doctor.email}</p>
                    <p>Department: {doctor.department}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                
            ) : (
                <p>Loading... </p>
            )}
            <Link to="/doctor-availabilty">
                <button>Appointment</button>
            </Link>
        </div>
    );
}

export default DoctorsDashboard;
