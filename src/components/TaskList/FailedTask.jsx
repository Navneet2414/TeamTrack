import React from 'react';
import { BugOff } from 'lucide-react'; // Optional

const failedTasks = [
  {
    id: 1,
    title: 'Login Button not responding',
    project: 'E-Commerce App',
    qaReportedBy: 'Samantha',
    teamLead: 'Daniel',
    status: 'Failed',
    reason: 'UI freeze on form validation error',
    dateReported: '2025-04-18',
  },
  {
    id: 2,
    title: 'Cart not updating quantity',
    project: 'Grocery Delivery',
    qaReportedBy: 'John',
    teamLead: 'Lisa',
    status: 'Failed',
    reason: 'Redux state mismatch on add/remove',
    dateReported: '2025-04-17',
  },
  {
    id: 3,
    title: 'App crashes on profile update',
    project: 'Health Tracker',
    qaReportedBy: 'Aisha',
    teamLead: 'Mike',
    status: 'Failed',
    reason: 'Null pointer on avatar upload',
    dateReported: '2025-04-19',
  },
];

const FailedTask = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-5 max-h-[500px] overflow-auto">
      <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2 mb-4">
        <BugOff className="w-6 h-6 " /> Failed QA Tasks
      </h2>

      {failedTasks.length === 0 ? (
        <p className="text-gray-600 italic">No failed tasks found.</p>
      ) : (
        <div className="grid gap-4">
          {failedTasks.map(task => (
            <div
              key={task.id}
              className="border border-red-300 p-4 rounded-md bg-red-100 hover:bg-red-200 transition duration-200"
            >
                <div className="flex justify-end">
              
              <div>
                <button className='bg-green-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Move To QA</button>
              </div>
            </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-red-800">{task.title}</h3>
                <span className="px-2 py-1 text-xs bg-red-600 text-white rounded-full">
                  {task.status}
                </span>
              </div>

              <p className="text-sm text-gray-800 italic mb-2">Reason: {task.reason}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-900">
                <div className='text-gray-800'><span className="font-semibold text-gray-900">Project:</span> {task.project}</div>
                <div className='text-gray-800'><span className="font-semibold text-gray-800">Reported By:</span> {task.qaReportedBy}</div>
                <div className='text-gray-800'><span className="font-semibold text-gray-800">Team Lead:</span> {task.teamLead}</div>
                <div className='text-gray-800'><span className="font-semibold text-gray-800">Reported:</span> {task.dateReported}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FailedTask;
