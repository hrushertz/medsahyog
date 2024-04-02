import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DepartmentIcon from '../Assets/DepartmentIcon.svg';
import AppointmentsIcon from '../Assets/AppointmentsIcon.svg';
import DoctorsIcon from '../Assets/DoctorsIcon.svg';
import AssignDoctorIcon from '../Assets/AssignDoctorIcon.svg';
import LogoutIcon from '../Assets/LogoutIcon.svg';

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
    <div style={{ position: 'relative', display: 'flex', width: '100%' }}>
      {/* Main content */}
      <div style={{ paddingTop: '45px', backgroundColor: '#F3F6FC', overflowX: 'hidden', flex: 1 }}>
        <div style={{ backgroundColor: '#273967', height: '45px', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '10px', color: 'white', fontFamily: 'Inter, sans-serif' }}>
            <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Help</a>
          </div>
        </div>
        <h2 style={{ color: '#02D0C2', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold', position: 'absolute', width: '100%', top: '90px', left: '120px', zIndex: 2 }}>HELP</h2>
        <div style={{ textAlign: 'center', paddingTop: '200px', paddingLeft: '100px', paddingRight: '100px' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tortor a lacus venenatis, vel blandit lacus viverra. Mauris luctus quis turpis id ultrices. Cras euismod tortor id dolor consectetur, in feugiat felis malesuada. Aliquam erat volutpat. Nulla facilisi. Duis venenatis, turpis non tempor ullamcorper, lacus metus facilisis lectus, nec placerat risus nisl in lorem. Nulla facilisi. In ut lacus varius, interdum libero id, eleifend quam. Phasellus eget pretium velit. Ut in dolor augue. Proin vitae suscipit leo, eget egestas odio. Fusce sem quam, luctus in pharetra nec, fringilla eu sapien. Duis sed erat convallis, blandit magna et, rutrum lectus. Sed in sapien nec libero facilisis maximus et in sapien. Fusce id justo feugiat, venenatis urna in, ultricies lorem. Mauris semper nec neque id posuere.
          </p>
        </div>
        <Link to="/admin-page">
          <h4 style={{ color: 'white', textAlign: 'left', lineHeight: '45px', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 300, position: 'absolute', width: '100%', top: 0, left: 0, zIndex: 2, paddingLeft: '95px' }}>ADMIN DASHBOARD</h4>
        </Link>
      </div>
    </div>
  );
};

export default Help;
