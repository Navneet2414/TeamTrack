import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data = {} }) => {
  const { admin = [], employees = [], teamLead = [] } = data;
  console.log("AdmindasEMp:", admin);
  console.log("EmployeesdasEmp:", employees);
  console.log("Team LeadsdasEmp:", teamLead);
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen mt-10'>
        {/* <h1 className='text-2xl'>Hello <br/> <span>Navneet</span></h1> */}
        <Header data={data}/>
        <TaskListNumber data={data}/>
        <TaskList data = {data}/>


    </div>
  )
}

export default EmployeeDashboard