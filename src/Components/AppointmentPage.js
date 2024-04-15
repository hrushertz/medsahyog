import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointmentpage.css'
import Navbar from './Navbar';
import Footer from './Footer';

function AppointmentPage() {
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch departments from the server
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/departments');
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        fetchDepartments();
    }, []);

    useEffect(() => {
        if (!appointmentDate || !selectedDoctor) return;

        // Fetch appointments for the selected date and doctor
        const fetchAppointments = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/appointments?date=${appointmentDate}&doctor=${selectedDoctor}`);
                const bookedTimes = response.data.map(appointment => appointment.time);
                // Filter out the booked times from the available times
                const availableTimes = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].filter(time => !bookedTimes.includes(time));
                setAvailableTimes(availableTimes);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, [appointmentDate, selectedDoctor]);

    const handleDepartmentChange = async (e) => {
        const departmentName = e.target.value;
        setSelectedDoctor('');
    
        // Fetch doctors corresponding to the selected department
        try {
            const response = await axios.get(`http://localhost:5000/api/doctorsappt?department=${departmentName}`);
            setDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    const handleAppointmentDateChange = (e) => {
        setAppointmentDate(e.target.value);
    };

    const handleAppointmentTimeChange = (e) => {
        setAppointmentTime(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Fetch the currently logged-in patient
            const response = await axios.get('http://localhost:5000/api/currentuserpat');
            const patientId = response.data._id;
    
            // Submit appointment data to the backend
            const appointmentData = {
                date: appointmentDate,
                time: appointmentTime,
                doctor: selectedDoctor,
                patient: patientId
            };
            const appointmentResponse = await axios.post('http://localhost:5000/api/appointments', appointmentData);
    
            // If the appointment was successfully saved, reset form fields
            setAppointmentDate('');
            setAppointmentTime('');
            setSelectedDoctor('');
            setError('');
    
            // Display an alert message
            window.alert('Appointment booked successfully!');
    
            console.log('Appointment saved:', appointmentResponse.data);
        } catch (error) {
            // If there was an error, display the error message
            setError(error.response.data.message);
            console.error('Error saving appointment:', error);
        }
    };
    

    return (
        <>
        <Navbar/> 
        <div className="AppointmentPage">
            <h3>BOOK AN APPOINTMENT</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="appointmentDate">Date:</label>
                    <input type="date" id="appointmentDate" value={appointmentDate} onChange={handleAppointmentDateChange} />
                </div>
                <div>
                    <label htmlFor="appointmentTime">Time:</label>
                    <select id="appointmentTime" value={appointmentTime} onChange={handleAppointmentTimeChange}>
                        <option value="">Select Time</option>
                        {availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="department">Department:</label>
                    <select id="department" onChange={handleDepartmentChange}>
                        <option value="">Select Department</option>
                        {departments.map(department => (
                            <option key={department._id} value={department.name}>{department.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="doctor">Doctor:</label>
                    <select id="doctor" value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
                        <option value="">Select Doctor</option>
                        {doctors.map(doctor => (
                            <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" style={{ backgroundColor: '#51c8c0' }}>Book Appointment</button>

            </form>
        </div>
        <Footer/>
        </>
    );
}

export default AppointmentPage;
