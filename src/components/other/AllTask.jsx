// import React from 'react'

// const AllTask = () => {
//   return (
//     <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-52 overflow-auto'>
//         <div className='bg-red-400  mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2>Sarthak</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className='bg-green-400 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2>Sarthak</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className='bg-yellow-400 mb-2py-2 px-4 flex justify-between rounded'>
//             <h2>Sarthak</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2>Sarthak</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className='bg-purple-400 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2>Sarthak</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//     </div>
//   )
// }

// export default AllTask
import React, { useEffect, useState } from 'react';

const tasksList = [
  {
    id: 1,
    Project: "xyz",
    title: "Design homepage layout",
    description: "Create a wireframe for the main landing page.",
    assignedTo: "Alice",
    assignedBy: "Alice",
    status: "In Progress",
    priority: "High",
    dueDate: "2025-04-25"
  },
  {
    id: 2,
    Project: "xyz",
    assignedBy: "Bob",
    title: "Set up backend server",
    description: "Initialize Express server and connect to MongoDB.",
    assignedTo: "Bob",
    status: "Not Started",
    priority: "Medium",
    dueDate: "2025-04-22"
  },
  {
    id: 3,
    Project: "xyz",
    assignedBy: "Bob",
    title: "Write unit tests",
    description: "Add tests for the login API endpoint.",
    assignedTo: "Charlie",
    status: "Pending Review",
    priority: "Low",
    dueDate: "2025-04-27"
  },
  {
    id: 4,
    Project: "xyz",
    assignedBy: "Bob",
    title: "Fix navbar responsiveness",
    description: "Ensure navbar works on mobile devices.",
    assignedTo: "Diana",
    status: "Completed",
    priority: "High",
    dueDate: "2025-04-20"
  },
  {
    id: 5,
    Project: "xyz",
    assignedBy: "Bob",
    title: "Update README",
    description: "Add project setup instructions and usage guide.",
    assignedTo: "Ethan",
    status: "In Progress",
    priority: "Low",
    dueDate: "2025-04-23"
  }
];

const AllTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    console.log("savedtask",savedTasks)
    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    } else {
      setTasks(tasksList);
      localStorage.setItem('tasks', JSON.stringify(tasksList));
    }
  }, []);
  // console.log("Tasks",tasks);

  return (
    <div className="bg-[#1c1c1c] p-6 rounded mt-12 max-h-[500px] overflow-auto shadow-xl">
      <h1 className="text-white text-xl font-semibold mb-4">All Tasks</h1>

      {tasks.length === 0 ? (
        <p className="text-gray-400 text-sm">No tasks found.</p>
      ) : (
        tasks.map((task,idx) => (
          <div
            key={task.id}
            className="mb-4 p-4 rounded-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 shadow-lg hover:scale-102 transition-transform duration-200"
          >
            <div className="flex justify-between">
              <div>
                <button className="bg-green-600 text-lg font-medium text-white px-5 py-2 rounded-sm">Delete</button>
              </div>
              <div>
                <button className="bg-yellow-600 text-lg font-medium text-white px-5 py-2 rounded-sm">MoveTo QA</button>
              </div>
              <div>
                <button className='bg-green-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Edit</button>
              </div>
            </div>
            <div className="mb-2">
              <h2 className="text-lg font-semibold text-white">{task.title}</h2>
              <p className="text-sm text-gray-300 italic">{task.description}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm mt-2">
              <div>
                <span className="text-gray-200 font-medium">Project:</span>{' '}
                <span className="text-white">{task.Project}</span>
              </div>
              <div>
                <span className="text-gray-200 font-medium">Assigned To:</span>{' '}
                <span className="text-white">{task.assignedTo}</span>
              </div>
              <div>
                <span className="text-gray-200 font-medium">Assigned By:</span>{' '}
                <span className="text-white">{task.assignedBy}</span>
              </div>
              <div>
                <span className="text-gray-200 font-medium">Status:</span>{' '}
                <span className="text-white">{task.status}</span>
              </div>
              <div>
                <span className="text-gray-200 font-medium">Priority:</span>{' '}
                <span
                  className={`text-white ${
                    task.priority === 'High'
                      ? 'bg-red-600'
                      : task.priority === 'Medium'
                      ? 'bg-yellow-600'
                      : 'bg-green-600'
                  } px-2 py-1 rounded-full`}
                >
                  {task.priority}
                </span>
              </div>
              <div>
                <span className="text-gray-200 font-medium">Due Date:</span>{' '}
                <span className="text-white">{task.dueDate}</span>
              </div>
              
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllTask;
