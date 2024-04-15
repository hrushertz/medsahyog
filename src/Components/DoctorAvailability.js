import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DoctorAvailability.css';
import Navbar from './Navbar';
import Footer from './Footer';

function DoctorAvailability() {
   
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [doctorId, setDoctorId] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/currentuserdoc');
                if (response.data) {
                    setDoctorId(response.data._id);
                } else {
                    setError('Doctor details not found');
                }
            } catch (error) {
                console.error('Error fetching doctor details:', error);
                setError('Error fetching doctor details');
            }
        };

        fetchDoctorDetails();
    }, []);

    useEffect(() => {
        if (!appointmentDate || !doctorId) return;

        // Fetch appointments for the selected date and doctor
        const fetchAppointments = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/appointments?date=${appointmentDate}&doctor=${doctorId}`);
                const bookedTimes = response.data.map(appointment => appointment.time);
                // Filter out the booked times from the available times
                const availableTimes = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].filter(time => !bookedTimes.includes(time));
                setAvailableTimes(availableTimes);
            } catch (error) {
                console.error('Error fetching appointments:', error);
                setError('Error fetching appointments');
            }
        };

        fetchAppointments();
    }, [appointmentDate, doctorId]);

    const handleAppointmentDateChange = (e) => {
        setAppointmentDate(e.target.value);
    };

    const handleAppointmentTimeChange = (e) => {
        setAppointmentTime(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Submit appointment data to the backend with patient ID as 0
            const appointmentData = {
                date: appointmentDate,
                time: appointmentTime,
                doctor: doctorId,
                patient: 0 // Set patient ID as 0
            };
            const appointmentResponse = await axios.post('http://localhost:5000/api/appointments', appointmentData);
    
            // If the appointment was successfully saved, reset form fields
            setAppointmentDate('');
            setAppointmentTime('');
            setError('');
            console.log('Appointment saved:', appointmentResponse.data);
        } catch (error) {
            // If there was an error, display the error message
            setError(error.response.data.message || 'Error saving appointment');
            console.error('Error saving appointment:', error);
        }
    };
    
    

    return (
        <>
        <Navbar/> 
        <div className="DoctorAvailability">
            <h3>SET UNAVAILABILITY TIMINGS</h3>
            {error && <p>{error}</p>}
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="appointmentDate">Date:</label>
                    <input type="date" id="appointmentDate" value={appointmentDate} onChange={handleAppointmentDateChange} />
                </div>
                <div className="input-container">
    <label htmlFor="appointmentTime">Time:</label>
    <select id="appointmentTime" value={appointmentTime} onChange={handleAppointmentTimeChange}>
        <option value="">Select Time</option>
        {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
        ))}
    </select>
</div>
                <button type="submit">Set Unavailable</button>
            </form>
        </div>
        <Footer/>
        </>
    );
}

export default DoctorAvailability;
