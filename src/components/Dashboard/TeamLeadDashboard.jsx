import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import { Link } from 'react-router-dom';
import ProjectList from '../other/ProjectList';

const TeamLeadDashboard = () => {
  // const { admin = [], employees = [], teamLead = [] } = data;
  // console.log("AdmindasEMp:", admin);
  // console.log("EmployeesdasEmp:", employees);
  // console.log("Team LeadsdasEmp:", teamLead);
  

  return (
    <>
      <Header />

      <ProjectList/>
    </>
  );
};

export default TeamLeadDashboard;
