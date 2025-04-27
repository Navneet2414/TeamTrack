import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login,setLogin] = useState('');



  const navigate = useNavigate(); 
  const loginData = async () => {
    console.log("login data",email,password);
    try {
      const response = await axios.post('http://localhost:7000/api/employee/login', {
        email,
        password
      }, {
        withCredentials: true,
      });
      const teamData = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];
      // setLogin(teamData);
      console.log("teamData",teamData);
      console.log("teamData",teamData.role);
      console.log("teamData",teamData.Name);
      localStorage.setItem('loggedInUser', JSON.stringify({
        name: teamData.Name,
        role: teamData.role,
        email: email // optional but useful for lookup
      }));
      // handleLogin(teamData.Name,teamData.role);
      if (teamData.role === 'admin') {
        console.log("in admin");
        navigate('/admin-dashboard');
      } else if (teamData.role === 'employee') {
        console.log("in employee");
        navigate('/employee-dashboard');
      } else if (teamData.role === 'teamLead') {
        console.log("in teamLead");
        navigate('/team-lead-dashboard');
      }
    } catch (error) {
      console.error("Error fetching login dashboard:", error);
    }
  };
  
  const submitHandler= (e) => {
    e.preventDefault()
    loginData()
    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <div className='border-2  rounded-xl border-emerald-600 p-20'>
        <form
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'>
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 rounded-full pl-4 placeholder:text-gray-400 ' type="email" placeholder='Enter your email'/>
          <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='text-white outline-none bg-transparent  border-2 border-emerald-600 text-xl py-3 rounded-full mt-3 pl-4 placeholder:text-gray-400' type="password" placeholder="Enter password" />
          <button className=' mt-7 text-white border-none outline-none bg-emerald-700 text-xl py-3 px-5 rounded-full placeholder:text-white'
            onClick={() => loginData()}
          >Log In</button>
        </form>  
      </div>
    </div>
  )
}

export default Login
