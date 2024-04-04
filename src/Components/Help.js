import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DepartmentIcon from '../Assets/DepartmentIcon.svg';
import AppointmentsIcon from '../Assets/AppointmentsIcon.svg';
import DoctorsIcon from '../Assets/DoctorsIcon.svg';
import AssignDoctorIcon from '../Assets/AssignDoctorIcon.svg';
import LogoutIcon from '../Assets/LogoutIcon.svg';
import Footer02 from './Footer02';

const Help = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const buttons = [
    { icon: DepartmentIcon, alt: 'Department Icon' },
    { icon: AppointmentsIcon, alt: 'Appointments Icon' },
    { icon: DoctorsIcon, alt: 'Doctors Icon' },
    { icon: AssignDoctorIcon, alt: 'Assign Doctor Icon' }
  ];

  return (
    <div style={{ position: 'relative', display: 'flex', width: '100%', backgroundColor: '#F3F6FC',flexDirection: 'column', minHeight: '100vh' }}>
      {/* Main content */}
      <div style={{ paddingTop: '45px', overflowX: 'hidden', flex: 1 }}>
        <div style={{ backgroundColor: '#273967', height: '45px', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '10px', color: 'white', fontFamily: 'Inter, sans-serif' }}>
            <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Help</a>
          </div>
        </div>
        <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold', position: 'absolute', width: '90%', top: '90px', left: '100px', zIndex: 2 }}>HELP</h2>
        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', paddingTop: '20px', paddingBottom: '20px', textAlign: 'justify', paddingTop: '120px', paddingLeft: '100px', paddingRight: '100px', color: '#273967' }}>
          <div>
            <h3>User Module:</h3>
            <ul>
              <li>Appointments: Users can schedule appointments with doctors based on their availability and department.</li>
              <li>View Appointment History: Users can view their past and upcoming appointments.</li>
              <li>Profile Management: Users can update their personal information such as contact details and medical history.</li>
            </ul>
          </div>
          <div>
            <h3>Doctor Module:</h3>
            <ul>
              <li>View Appointments: Doctors can view their upcoming appointments and patient details.</li>
              <li>Update Availability: Doctors can set their availability for appointments.</li>
              <li>Patient Management: Doctors can update patient records and treatment details.</li>
            </ul>
          </div>
          <div>
            <h3>Admin Module:</h3>
            <ul>
              <li>Manage Departments: Admins can add, edit, or remove departments within the hospital.</li>
              <li>Manage Doctors: Admins can add new doctors, update their information, or remove them from the system.</li>
              <li>Appointment Management: Admins can access and assign doctors to appointments as needed.</li>
            </ul>
          </div>
          <div>
            <h3>General Functions:</h3>
            <ul>
              <li>Search Functionality: Users, doctors, and admins can search for specific appointments, doctors, or departments using the search bar.</li>
              <li>Notification System: Users, doctors, and admins receive notifications for appointment reminders, updates, or any important announcements.</li>
              <li>Security: The system ensures the security and privacy of patient information through encryption and access control mechanisms.</li>
            </ul>
          </div>
          <div>
            <h3>Troubleshooting:</h3>
            <ul>
              <li>Forgot Password: If you forget your password, use the "Forgot Password" link on the login page to reset it.</li>
              <li>Technical Support: For any technical issues or questions, please contact our support team at support@hospitalmanagement.com.</li>
            </ul>
          </div>
          <div>
            <h3>Feedback:</h3>
            <p>
              We value your feedback! If you have any suggestions or encounter any issues while using the system, please let us know through the feedback form located in the system.
            </p>
            <p>
              Thank you for using our Hospital Management System! We hope this platform helps streamline your hospital experience and improves overall efficiency in managing appointments and resources.
            </p>
          </div>
        </div>
        <Link to="/admin-page">
          <h4 style={{ color: 'white', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 300, position: 'absolute', width: '100%', top: 0, left: 0, zIndex: 2, paddingLeft: '95px', backgroundColor: '#273967' }}>ADMIN DASHBOARD</h4>
        </Link>
      </div>
      <Footer02 />
    </div>
  );
};

export default Help;
