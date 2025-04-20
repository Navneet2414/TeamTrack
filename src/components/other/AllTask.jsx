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

const AllTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 max-h-80 overflow-auto">
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-sm">No tasks found.</p>
      ) : (
        tasks.map((task, index) => (
          <div
            key={index}
            className={`mb-2 py-2 px-4 flex justify-between rounded ${
              index % 5 === 0
                ? 'bg-red-400'
                : index % 5 === 1
                ? 'bg-green-400'
                : index % 5 === 2
                ? 'bg-yellow-400'
                : index % 5 === 3
                ? 'bg-blue-400'
                : 'bg-purple-400'
            }`}
          >
            <h2>{task.assign}</h2>
            <h3>{task.title}</h3>
            <h5>{task.status}</h5>
          </div>
        ))
      )}
    </div>
  );
};

export default AllTask;
