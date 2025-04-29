// import axios from 'axios';
// import React, { useEffect, useState } from 'react';


// const CreateTask = ({ isEditMode, initialData, onSave, onCancel }) => {
//   const [taskName, setTaskName] = useState('');
//   const [date, setDate] = useState('');
//   const [assignTo, setAssignTo] = useState('');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [priority,setPriority] = useState(['']);
//   const [taskList, setTaskList] = useState([]);
//   const [taskData, setTaskData] = useState({
//     taskName: '',
//     assignTo: '',
//     category: '',
//     description: '',
//   });
//   useEffect(() => {
//     if (initialData) {
//       setTaskData(initialData);  // Prefill form if editing
//     }
//   }, [initialData]);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTaskData((prev) => ({ ...prev, [name]: value }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   onSave(taskData); // Call parent function
//   // };
  

//   const formatDate = (inputDate) => {
//     if (!inputDate) return "";

//     const dateObj = new Date(inputDate);
//     if (isNaN(dateObj)) return inputDate; // If already formatted (string) return as is.

//     const padZero = (num) => (num < 10 ? `0${num}` : num);

//     const day = padZero(dateObj.getDate());
//     const month = padZero(dateObj.getMonth() + 1);
//     const year = dateObj.getFullYear();

//     return `${day}/${month}/${year}`;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     onSave(taskData);

//     if (!date) {
//       alert("Please select a date!");
//       return;
//     }

//     const formattedDate = formatDate(date); // format selected date into dd/mm/yyyy

//     const newTask = {
//       taskName,
//       Date: formattedDate, // backend expects 'Date' key
//       assignTo,
//       category,
//       priority,
//       description,
//     };

//     try {
//       const res = await axios.post("http://localhost:7000/api/employee/createTask", newTask);
//       const savedTask = res.data.record;
//       console.log("savedTask",savedTask);
//       setTaskList([...taskList, savedTask]); // push directly saved task

//       setTaskName('');
//       setDate('');
//       setAssignTo('');
//       setCategory('');
//       setPriority('')
//       setDescription('');
//     } catch (error) {
//       alert("Failed to create task!");
//       console.error("API error:", error);
//     }
//   };

//   return (
//     <div className="p-5 bg-[#1c1c1c] mt-7 rounded text-white">
//       <h1 className={`text-blue-400 text-center font-bold`}>
//         {isEditMode ? 'Update Task Record' : 'Create Task Record'}
//       </h1>
//       <form
//         className="flex flex-wrap w-full items-start justify-between"
//         onSubmit={handleSubmit}
//       >
//         <div className="w-1/2">
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Task Name</h3>
//             <input
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
//               type="text"
//               placeholder="Enter title"
//               value={taskName}
//               onChange={(e) => setTaskName(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
//             <input
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
//               type="datetime-local"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               // required
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
//             <input
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
//               type="text"
//               placeholder="Employee Name"
//               value={assignTo  || ""}
//               onChange={(e) => setAssignTo(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
//             <input
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
//               type="text"
//               placeholder="Design, Dev, etc."
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Priority</h3>
//             <select
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
//               value={priority || " "}
//               onChange={(e) => setPriority(e.target.value)}
//               required
//             >
//               <option value="" disabled style={{ color: 'black', fontStyle: 'italic' }}>
//                 Select Priority
//               </option>
//               {["Low", "Medium", "High"].map((option) => (
//                 <option key={option} value={option} style={{ color: 'black', fontStyle: 'italic' }}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="w-2/5 flex flex-col items-start">
//           <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
//           <textarea
//             className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
//             placeholder="Enter task details"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-50"
//           >
//              {isEditMode ? 'Update Task' : 'Create Task'}
//           </button>
//         </div>
//       </form>

//       {/* Task Table */}
//       {taskList.length > 0 && !isEditMode && (
//         <div className="mt-10 overflow-x-auto">
//           <h2 className="text-xl font-bold mb-4 text-white">Task List</h2>
//           <table className="min-w-full border border-gray-600 text-sm text-left text-gray-300">
//             <thead className="bg-gray-700 text-white">
//               <tr>
//                 <th className="px-4 py-2 border border-gray-600">#</th>
//                 <th className="px-4 py-2 border border-gray-600">Task</th>
//                 <th className="px-4 py-2 border border-gray-600">Date</th>
//                 <th className="px-4 py-2 border border-gray-600">Assign To</th>
//                 <th className="px-4 py-2 border border-gray-600">Category</th>
//                 <th className="px-4 py-2 border border-gray-600">Priority</th>
                
//                 <th className="px-4 py-2 border border-gray-600">Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {taskList.map((task, index) => (
//                 <tr key={index} className="bg-gray-800 hover:bg-gray-700">
//                   <td className="px-4 py-2 border border-gray-600">{index + 1}</td>
//                   <td className="px-4 py-2 border border-gray-600">{task.taskName}</td>
//                   <td className="px-4 py-2 border border-gray-600">{task.Date}</td>
//                   <td className="px-4 py-2 border border-gray-600">{task.assignTo}</td>
//                   <td className="px-4 py-2 border border-gray-600">{task.category}</td>
//                   <td className="px-4 py-2 border border-gray-600">{task.priority}</td>
//                   <td className="px-4 py-2 border border-gray-600">{task.description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateTask;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CreateTask = ({ isEditMode, initialData, onSave, onCancel }) => {
  console.log("InitialData",initialData)
  const [taskData, setTaskData] = useState({
    taskName: '',
    date: '',
    assignTo: '',
    category: '',
    priority: '',
    description: '',
  });

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    if (initialData) {
      setTaskData(initialData);  // prefill form when editing
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const formatDate = (inputDate) => {
    if (!inputDate) return '';
    const dateObj = new Date(inputDate);
    if (isNaN(dateObj)) return inputDate;
    const padZero = (num) => (num < 10 ? `0${num}` : num);
    return `${padZero(dateObj.getDate())}/${padZero(dateObj.getMonth() + 1)}/${dateObj.getFullYear()}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskData.date) {
      alert('Please select a date!');
      return;
    }

    const formattedDate = formatDate(taskData.date);

    const payload = {
      ...taskData,
      Date: formattedDate, // backend expects 'Date' key
    };

    try {
      if (isEditMode && initialData?._id) {
        // Update task
        const res = await axios.post(
          `http://localhost:7000/api/employee/updatecreateTask/${initialData._id}`,
          payload,
          { withCredentials: true }
        );
        alert('Task updated successfully!');
        onSave(res.data.updatedTask);  // pass back to parent
      } else {
        // Create new task
        const res = await axios.post(
          'http://localhost:7000/api/employee/createTask',
          payload,
          { withCredentials: true }
        );
        const savedTask = res.data.record;
        setTaskList((prev) => [...prev, savedTask]);
        alert('Task created successfully!');
      }

      // Reset form after save
      setTaskData({
        taskName: '',
        date: '',
        assignTo: '',
        category: '',
        priority: '',
        description: '',
      });

    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to save task!');
    }
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded text-white">
      <h1 className="text-blue-400 text-center font-bold">
        {isEditMode ? 'Update Task Record' : 'Create Task Record'}
      </h1>

      <form
        className="flex flex-wrap w-full items-start justify-between"
        onSubmit={handleSubmit}
      >
        <div className="w-1/2">
          {/* Task Name */}
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Name</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              name="taskName"
              value={taskData.taskName}
              onChange={handleChange}
              placeholder="Enter title"
              required
            />
          </div>

          {/* Date */}
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="datetime-local"
              name="date"
              value={taskData.date}
              onChange={handleChange}
            />
          </div>

          {/* Assign To */}
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              name="assignTo"
              value={taskData.assignTo}
              onChange={handleChange}
              placeholder="Employee Name"
              required
            />
          </div>

          {/* Category */}
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              name="category"
              value={taskData.category}
              onChange={handleChange}
              placeholder="Design, Dev, etc."
              required
            />
          </div>

          {/* Priority */}
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Priority</h3>
            <select
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              name="priority"
              value={taskData.priority}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Priority</option>
              {["Low", "Medium", "High"].map((option) => (
                <option key={option} value={option} style={{ color: 'black' }}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          {/* Description */}
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            name="description"
            value={taskData.description}
            onChange={handleChange}
            placeholder="Enter task details"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-50"
          >
            {isEditMode ? 'Update Task' : 'Create Task'}
          </button>
        </div>
      </form>

      {/* Task List (Only show in create mode) */}
      {taskList.length > 0 && !isEditMode && (
        <div className="mt-10 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4 text-white">Task List</h2>
          <table className="min-w-full border border-gray-600 text-sm text-left text-gray-300">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="px-4 py-2 border border-gray-600">#</th>
                <th className="px-4 py-2 border border-gray-600">Task</th>
                <th className="px-4 py-2 border border-gray-600">Date</th>
                <th className="px-4 py-2 border border-gray-600">Assign To</th>
                <th className="px-4 py-2 border border-gray-600">Category</th>
                <th className="px-4 py-2 border border-gray-600">Priority</th>
                <th className="px-4 py-2 border border-gray-600">Description</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((task, index) => (
                <tr key={index} className="bg-gray-800 hover:bg-gray-700">
                  <td className="px-4 py-2 border border-gray-600">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-600">{task.taskName}</td>
                  <td className="px-4 py-2 border border-gray-600">{task.Date}</td>
                  <td className="px-4 py-2 border border-gray-600">{task.assignTo}</td>
                  <td className="px-4 py-2 border border-gray-600">{task.category}</td>
                  <td className="px-4 py-2 border border-gray-600">{task.priority}</td>
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
