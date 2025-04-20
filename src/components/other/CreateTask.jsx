import React, { useState } from 'react';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [assign, setAssign] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, date, assign, category, description };
    setTaskList([...taskList, newTask]);

    // Reset fields
    setTitle('');
    setDate('');
    setAssign('');
    setCategory('');
    setDescription('');
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded text-white">
      <form
        className="flex flex-wrap w-full items-start justify-between"
        onSubmit={handleSubmit}
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
              value={assign}
              onChange={(e) => setAssign(e.target.value)}
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Design, Dev, etc."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            placeholder="Enter task details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-50"
          >
            Create Task
          </button>
        </div>
      </form>

      {/* Task Table */}
      {taskList.length > 0 && (
        <div className="mt-10 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4 text-white">Task List</h2>
          <table className="min-w-full border border-gray-600 text-sm text-left text-gray-300">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="px-4 py-2 border border-gray-600">#</th>
                <th className="px-4 py-2 border border-gray-600">Title</th>
                <th className="px-4 py-2 border border-gray-600">Date</th>
                <th className="px-4 py-2 border border-gray-600">Assign To</th>
                <th className="px-4 py-2 border border-gray-600">Category</th>
                <th className="px-4 py-2 border border-gray-600">Description</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((task, index) => (
                <tr key={index} className="bg-gray-800 hover:bg-gray-700">
                  <td className="px-4 py-2 border border-gray-600">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-600">{task.title}</td>
                  <td className="px-4 py-2 border border-gray-600">{task.date}</td>
                  <td className="px-4 py-2 border border-gray-600">{task.assign}</td>
                  <td className="px-4 py-2 border border-gray-600">{task.category}</td>
                  <td className="px-4 py-2 border border-gray-600">{task.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CreateTask;
