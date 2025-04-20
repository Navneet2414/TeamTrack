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
        
        <Route path="/" element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to={user === 'admin' ? '/admin' : user === 'teamLead' ? '/teamLead' : '/employee'} />} />
        <Route path="/admin" element={user === 'admin' ? <AdminDashboard  data = {{ admin, employees, teamLead }}/> : <Navigate to="/" />} />
        <Route path="/employee" element={user === 'employees' ? <EmployeeDashboard data={{ admin, employees, teamLead }}  /> : <Navigate to="/" />} />
        <Route path="/teamLead" element={user === 'teamLead' ? <TeamLeadDashboard data={{ admin, employees, teamLead }}  /> : <Navigate to="/" />} />
        {/* <Route path="/teamLead" element={<TeamLeadDashboard/>} /> */}
        <Route path="/add-project-team" element={<AddProjectTeam />} /> 
        <Route path="/createTask" element={<CreateTask />} /> 
      </Routes>
    </>
  );
}

export default App;

