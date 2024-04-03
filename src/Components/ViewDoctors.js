import React from 'react';

const ViewDoctors = ({ doctors }) => {
  return (
    <div>
      <h2 style={{marginTop: '50px'}}>LIST OF DOCTORS</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Specialization</th>
            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Experience</th>
            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Consultation Fee</th>
            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Timing</th>
          </tr>
        </thead>
        <tbody>
          {/* {doctors.map((doctor, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{doctor.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{doctor.specialization}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{doctor.experience}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{doctor.consultationFee}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{doctor.timing}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDoctors;
