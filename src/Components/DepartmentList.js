// import React, { useState } from 'react';
// import './DepartmentList.css';

// const DepartmentList = () => {
//   const [departments, setDepartments] = useState([]);
//   const [newDepartment, setNewDepartment] = useState({
//     name: '',
//     description: ''
//   });
//   const [updateIndex, setUpdateIndex] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewDepartment({ ...newDepartment, [name]: value });
//   };

//   const addDepartment = () => {
//     if (newDepartment.name && newDepartment.description) {
//       if (updateIndex !== null) {
//         const updatedDepartments = [...departments];
//         updatedDepartments[updateIndex] = newDepartment;
//         setDepartments(updatedDepartments);
//         setUpdateIndex(null);
//       } else {
//         setDepartments([...departments, newDepartment]);
//       }
//       setNewDepartment({ name: '', description: '' });
//     } else {
//       alert('Please fill in all fields');
//     }
//   };

//   const removeDepartment = (index) => {
//     const updatedDepartments = [...departments];
//     updatedDepartments.splice(index, 1);
//     setDepartments(updatedDepartments);
//   };

//   const handleUpdate = (index) => {
//     setUpdateIndex(index);
//     setNewDepartment(departments[index]);
//   };

//   return (
//     <div>
//       <h2 style={{fontFamily: 'Inter, sans-serif'}}>LIST OF DEPARTMENTS</h2>
//       <table className="department-list">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {departments.map((department, index) => (
//             <tr key={index}>
//               <td>{department.name}</td>
//               <td>{department.description}</td>
//               <td>
//                 <button onClick={() => removeDepartment(index)}>Remove</button>
//                 <button onClick={() => handleUpdate(index)}>Update</button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td><input type="text" name="name" placeholder="Name" value={newDepartment.name} onChange={handleInputChange} /></td>
//             <td><input type="text" name="description" placeholder="Description" value={newDepartment.description} onChange={handleInputChange} /></td>
//             <td><button onClick={addDepartment}>{updateIndex !== null ? 'Update Department' : 'Add Department'}</button></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DepartmentList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DepartmentList.css';

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/departments');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const removeDepartment = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/departments/${id}`);
      if (response.status === 200) {
        // If successful, update the departments list by filtering out the deleted department
        setDepartments(departments.filter(department => department._id !== id));
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error removing department:', error);
    }
  };

  return (
    <div>
      <h2>Department List</h2>
      <table className="department-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={department._id}>
              <td>{department.name}</td>
              <td>{department.description}</td>
              <td>
                <button onClick={() => removeDepartment(department._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;