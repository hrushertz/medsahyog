import React from 'react';

const ShowAppointedList = ({ appointments }) => {
  return (
    <div>
      <h2 style={{ marginTop: '50px' }}>LIST OF APPOINTMENTS</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Email</th>
            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Date</th>
            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Time Slot</th>
          </tr>
        </thead>
        <tbody>
          {/* {appointments.map((appointment, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{appointment.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{appointment.email}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{appointment.date}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{appointment.time}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAppointedList;
