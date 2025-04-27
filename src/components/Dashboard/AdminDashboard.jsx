import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import QaList from '../TaskList/QaList'
import CompletedProjectList from '../other/CompletedProjectList'

const AdminDashboard = () => {
    // const { admin, employees, teamLead } = data;
//   console.log("Admindas:", admin);
//   console.log("Employeesdas:", employees);
//   console.log("Team Leadsdas:", teamLead);
    return (
        <div className='h-screen w-full p-7'>
            {/* <Header data = {data}/> */}
            <Header />
            <CreateTask/>
            <AllTask/>
            <QaList/>
            <CompletedProjectList/>
            
        </div>
    )
}

export default AdminDashboard