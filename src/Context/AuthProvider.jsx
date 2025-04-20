// import React, { createContext, useState, useEffect } from 'react';
// import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [allUsers, setAllUsers] = useState({ employees: [], admin: [] });

//   // useEffect(() => {
//   //   setLocalStorage(); // initialize localStorage if not already done
//   //   const { employees, admin } = getLocalStorage();
//   //   setAllUsers({ employees, admin });

//   //   // load user if already logged in
//   //   const savedUser = JSON.parse(localStorage.getItem('loggedInUser'));
//   //   if (savedUser) {
//   //     setLoggedInUser(savedUser);
//   //   }
//   // }, []);
//   const [currentUser, setCurrentUser] = useState(null);

// useEffect(() => {
//   setLocalStorage();
//   const { employees, admin } = getLocalStorage();
//   const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
//   setUserData({ employees, admin });
//   setCurrentUser(storedUser); // <-- this line adds current user
// }, []);

//   return (
//     // <AuthContext.Provider value={{ loggedInUser, setLoggedInUser, allUsers }}>
//     <AuthContext.Provider value={{ ...userData, currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;


import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employees: [],
    admin: [],
    teamLead: [],
    currentUser: null
  });

  useEffect(() => {
    setLocalStorage(); // Initialize data if not present
    const { employees, admin ,teamLead} = getLocalStorage();
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    setUserData({
      employees,
      admin,
      teamLead,
      currentUser: loggedInUser || null
    });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
