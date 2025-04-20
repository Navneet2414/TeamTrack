import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({data}) => {
    const { admin, employees, teamLead } = data;
  console.log("Admindas:", admin);
  console.log("Employeesdas:", employees);
  console.log("Team Leadsdas:", teamLead);
    return (
        <div className='h-screen w-full p-7'>
            <Header data = {data}/>
            <CreateTask/>
            <AllTask/>
            
        </div>
    )
}

export default AdminDashboard