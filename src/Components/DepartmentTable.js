import React from 'react';

const DepartmentTable = ({ departments }) => {
  return (
    <div>
      <h2 style={{ fontFamily: 'Inter, sans-serif' }}>LIST OF DEPARTMENTS</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {/* {departments.map((department, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{department.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{department.description}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;
