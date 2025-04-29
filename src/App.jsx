import { useEffect, useState, useContext } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './Context/AuthProvider';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import AddProjectTeam from './pages/AddProjectTeam';
import { Route, Routes ,Navigate } from 'react-router-dom';
import TeamLeadDashboard from './components/Dashboard/TeamLeadDashboard';
import CreateTask from './components/other/CreateTask';
import CreateUser from './components/other/CreateUser';
// import { setLocalStorage } from './localStorage';

setLocalStorage();

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  // const employee = authData?.employees || [];
  // console.log('first',employee)
  // const  employees  = getLocalStorage("employees") || {};
  // Get all user groups from localStorage
const { employees = [], admin = [], teamLead = [] } = getLocalStorage() || {};

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    console.log("storedUser",storedUser);
    if (storedUser && storedUser.role) {
      setUser(storedUser.role);
    }
    setLocalStorage();
  }, []);

  const handleLogin = (email, password) => {
  // const { employees, admin ,teamLead} = getLocalStorage(); // get both from localStorage
  // const { employees = [], admin = [], teamLead = [] } = getLocalStorage() || {};


  console.log("aapp",employees);
  console.log("aapp",admin);
  console.log("aappT",teamLead);

  const adminMatch = admin.find(user => user.email === email && user.password === password);
  const employeeMatch = employees.find(emp => emp.email === email && emp.password === password);
  const teamLeadMatch = teamLead.find(emp => emp.email === email && emp.password === password);

  if (adminMatch) {
    setUser('admin');
    localStorage.setItem('loggedInUser', JSON.stringify({ email, role: 'admin' }));
  } else if (employeeMatch) {
    setUser('employees');
    localStorage.setItem('loggedInUser', JSON.stringify({ email, role: 'employees' }));
  } else if (teamLeadMatch) {
    setUser('teamLead');
    localStorage.setItem('loggedInUser', JSON.stringify({ email, role: 'teamLead' }));
  } else {
    alert('Invalid Credentials');
  }
};

  
  return (
    
    <>
      {/* {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard  />
      )} */}

      {/* <AddProjectTeam/> */}
      <Routes>
        
        <Route path="/" element={ <Login  />} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard/>} />
        <Route path="/team-lead-dashboard" element={<TeamLeadDashboard />} />
        {/* <Route path="/teamLead" element={<TeamLeadDashboard/>} /> */}
        <Route path="/add-project-team" element={<AddProjectTeam />} /> 
        <Route path="/createTask" element={<CreateTask />} /> 
        <Route path="/createUser" element={<CreateUser />} /> 
      </Routes>
    </>
  );
}

export default App;

