import React, { useEffect, useState } from 'react';
import { BugOff } from 'lucide-react';
import axios from 'axios';

const FailedTask = () => {
  const [failedTasks, setFailedTasks] = useState([]);

  useEffect(() => {
    const qaFailedList = async () => {
      const res = await axios.get("http://localhost:7000/api/employee/getQaFailedTask");
      setFailedTasks(res.data.record);
    };

    qaFailedList();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-5 max-h-[500px] overflow-auto">
      <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2 mb-4">
        <BugOff className="w-6 h-6" /> Failed QA Tasks
      </h2>

      {failedTasks.length === 0 ? (
        <p className="text-gray-600 italic">No failed tasks found.</p>
      ) : (
        <div className="grid gap-4">
          {failedTasks.map(task => (
            <div
              key={task._id || task.id} // ✅ UNIQUE KEY here
              className="border border-red-300 p-4 rounded-md bg-red-100 hover:bg-red-200 transition duration-200"
            >
              <div className="flex justify-end">
                <button className="bg-green-600 text-lg font-medium text-white px-5 py-2 rounded-sm">
                  Move To QA
                </button>
              </div>

              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-red-800">{task.taskName}</h3>
                <span className="px-2 py-1 text-xs bg-red-600 text-white rounded-full">
                  {task.status}
                </span>
              </div>

              <p className="text-sm text-gray-800 italic mb-2">
                <strong className='text-gray-800'>Reason:</strong> {task.failedDescription}
              </p>
              <p className="text-sm text-gray-800 italic mb-2">
                <strong className='text-gray-800'>Description:</strong> {task.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-900">
                <div className="text-gray-800">
                  <span className="font-semibold text-gray-900">Project:</span> {task.project}
                </div>
                <div className="text-gray-800">
                  <span className="font-semibold text-gray-900">Assign To:</span> {task.assignTo}
                </div>
                <div className="text-gray-800">
                  <span className="font-semibold text-gray-900">Team Lead:</span> {task.assignBy}
                </div>
                <div className="text-gray-800">
                  <span className="font-semibold text-gray-900">Status:</span> {task.status}
                </div>
              </div>

              {/* Media section */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">
                {task.media && task.media.map((mediaItem, mediaIndex) => (
                  <img
                    key={mediaIndex} // ✅ key added inside media mapping
                    src={mediaItem}
                    alt={`Media ${mediaIndex}`}
                    className="w-full h-28 object-cover rounded-md"
                  />
                ))}
                {task.video && (
                  <video controls className="w-full h-28 rounded-md">
                    <source src={task.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FailedTask;
