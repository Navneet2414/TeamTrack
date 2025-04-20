import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import { Link } from 'react-router-dom';

const TeamLeadDashboard = () => {
  const sampleProject = [
    {
      name: 'EV Dashboard Redesign',
      members: [
        { name: 'Alice', Task: 'Login Page', status: 'In Progress' },
        { name: 'Bob', Task: 'API Integration', status: 'Completed' },
        { name: 'Charlie', Task: 'Styling', status: 'Pending' },
      ],
      projectStatus: 'In Progress',
    },
    {
      name: 'Charging Station Tracker',
      members: [
        { name: 'David', Task: 'Map Integration', status: 'Completed' },
        { name: 'Eva', Task: 'User Analytics', status: 'In Progress' },
        { name: 'Frank', Task: 'Notifications', status: 'Pending' },
      ],
      projectStatus: 'Pending',
    },
    {
      name: 'Charging Station Tracker',
      members: [
        { name: 'David', Task: 'Map Integration', status: 'Completed' },
        { name: 'Eva', Task: 'User Analytics', status: 'In Progress' },
        { name: 'Frank', Task: 'Notifications', status: 'Pending' },
      ],
      projectStatus: 'Pending',
    },
    {
      name: 'Charging Station Tracker',
      members: [
        { name: 'David', Task: 'Map Integration', status: 'Completed' },
        { name: 'Eva', Task: 'User Analytics', status: 'In Progress' },
        { name: 'Frank', Task: 'Notifications', status: 'Pending' },
      ],
      projectStatus: 'Pending',
    },
    {
      name: 'Charging Station Tracker',
      members: [
        { name: 'David', Task: 'Map Integration', status: 'Completed' },
        { name: 'Eva', Task: 'User Analytics', status: 'In Progress' },
        { name: 'Frank', Task: 'Notifications', status: 'Pending' },
      ],
      projectStatus: 'Pending',
    },
  ];

  return (
    <>
      <Header />

      {/* Dashboard section with background and margin top, but no effect on Header */}
      <div className="bg-gray-100 min-h-screen pt-0 mt-4 rounded-lg">
        <div className="mt-6 px-4 mb-2">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Team Lead Dashboard
          </h1>

          <div className="flex flex-col items-center gap-6 border-red-600">
            {sampleProject.map((project, idx) => (
              <div
                key={idx}
                className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 border border-red-200 mb-4"
              >
                <div className="mb-4 flex justify-between">
                  <h2 className="text-xl font-semibold text-blue-600">{project.name}</h2>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-700">Project Status: </span>
                    <span className="text-blue-600 font-semibold">{project.projectStatus}</span>
                  </p>
                  <Link to="/createTask">
                  <button
                    // onClick={() => <CreateTask />}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Create Task
                  </button>
                  </Link>
                </div>

                {/* Header Row */}
                <div className="grid grid-cols-3 font-bold text-gray-700 mb-2 text-sm border-b border-red-600 pb-2">
                  <div className='font-bold text-gray-800 font-cursive'>Name</div>
                  <div className="text-center font-bold text-gray-800 font-cursive">Task</div>
                  <div className="text-right font-bold text-gray-800 mr-4 font-cursive">Status</div>
                </div>

                {/* Members Row */}
                {project.members.map((member, idy) => (
                  <div
                    key={idy}
                    className="grid grid-cols-3 items-center py-2 border-b last:border-b-0 text-sm mb-4"
                  >
                    <div className="text-gray-700">{member.name}</div>
                    <div className="text-center text-gray-700">{member.Task}</div>
                    <div className="text-right">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          member.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : member.status === 'In Progress'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {member.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamLeadDashboard;
