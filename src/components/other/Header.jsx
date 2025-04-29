import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import profileImage from '../../assets/Images/Navneegt.jpeg';

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);

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

      {(currentUser?.role !== 'employee' && currentUser?.role !== 'teamLead') && (
        <Link to="/createUser">
          <button className='bg-blue-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>
            Add New Member
          </button>
        </Link>
      )}

      <button
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'
        onClick={() => {
          localStorage.removeItem('loggedInUser');
          window.location.href = '/';
        }}
      >
        Log Out
      </button>

      <img
        src={profileImage} style={{ height: '4rem', width: '4rem' }}
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />
    </div>
  );
};

export default Header;

