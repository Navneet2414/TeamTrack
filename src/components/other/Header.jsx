import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // const { admin = [], employees = [], teamLead = [] } = data;
  const [currentUser, setCurrentUser] = useState(null);
  console.log("first",currentUser)

  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
  //   if (storedUser) {
  //     const { email, role } = storedUser;
  //     let foundUser = null;

  //     if (role === 'admin') {
  //       foundUser = admin.find(user => user.email === email);
  //     } else if (role === 'employees') {
  //       foundUser = employees.find(user => user.email === email);
  //     } else if (role === 'teamLead') {
  //       foundUser = teamLead.find(user => user.email === email);
  //     }

  //     setCurrentUser(foundUser);
  
  //   }
  // }, [admin, employees, teamLead]);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setCurrentUser({
        name: storedUser.name,
        role: storedUser.role
      });
    }
  }, []);
  

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold'>
        Hello <br />
        <span className='text-3xl'>
          {/* {currentUser?.firstName || 'User'} 👏 */}
          {currentUser?.name || 'User'} 👏
        </span>
      </h1>

{currentUser?.role !== 'employee' && (
  <Link to="/add-project-team">
    <button className='bg-green-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>
      Add Project Team
    </button>
  </Link>
)}

      {/* {currentUser && currentUser.role !== 'employees' && (
  <Link to="/add-project-team">
    <button className='bg-green-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>
      Add Project Team
    </button>
  </Link>
)} */}


      <button
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'
        onClick={() => {
          localStorage.removeItem('loggedInUser');
          window.location.href = '/';
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
