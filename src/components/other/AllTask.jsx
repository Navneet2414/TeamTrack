import React, { useEffect, useState } from 'react';
import axios from 'axios'; // you forgot this
import CreateTask from './CreateTask';
const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  // const [taskList, settaskList] = useState()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isMovingToQA, setIsMovingToQA] = useState(false);

  console.log("taskToEditggg", taskToEdit)

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/employee/getTaskList', {
          withCredentials: true,
        });
        console.log("response", response.data);
        const taskData = response.data?.record || [];
        console.log("taskData from APIqqq:", taskData.taskName);

        console.log("taskData from API:", taskData);

        setTasks(taskData);
        localStorage.setItem('tasks', JSON.stringify(taskData)); // save in localStorage too if you want
      } catch (error) {
        console.error("Error fetching task data:", error);

        // fallback to localStorage if API fails
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks && savedTasks.length > 0) {
          setTasks(savedTasks);
        }
      }
    };

    fetchTaskData();
  }, []);

  const handleEditClick = (task) => {
    setTaskToEdit(task);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (taskId, taskName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${taskName}"?`);
    if (!confirmDelete) return;

    try {
      const res = await axios.delete('http://localhost:7000/api/employee/deleteTaskRecord', {
        _id: taskId,
        taskName: taskName
      }, {
        withCredentials: true,
      });

      alert('Task deleted successfully!');
      console.log(res.data.msg);

      // Update state to remove deleted task
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      alert('Failed to delete the task.');
      console.error('Delete error:', error);
    }
  };

  // const handleEdit = async (taskId, task) => {
  //   try {
  //     const res = await axios.put(`http://localhost:7000/api/employee/updatecreateTask/${taskId}`, task, {
  //       withCredentials: true,
  //     });
  //     alert('Task updated successfully!');
  //     console.log(res.data.msg);

  //     // Update state to reflect updated task
  //     const updatedTasks = tasks.map((t) => (t._id === taskId ? { ...t, ...task } : t));
  //     setTasks(updatedTasks);
  //   } catch (error) {
  //     alert('Failed to edit the task.');
  //     console.error('Edit error:', error);
  //   }
  // };

  const handleTaskUpdate = async (updatedTask) => {
    try {
      const res = await axios.post(
        `http://localhost:7000/api/employee/updatecreateTask/${taskToEdit._id}`,
        updatedTask,
        { withCredentials: true }
      );

      alert('Task updated successfully!');
      console.log(res.data.msg);

      const updatedTasks = tasks.map((t) =>
        t._id === taskToEdit._id ? { ...t, ...updatedTask } : t
      );
      setTasks(updatedTasks);

      setIsEditModalOpen(false);
      setTaskToEdit(null);
    } catch (error) {
      alert('Failed to update the task.');
      console.error('Update error:', error);
    }
  }; 

  const handleMoveToQA = async (qaTaskupdate) => {
    try {
      setIsMovingToQA(true);
  
      const res = await axios.post(
        `http://localhost:7000/api/employee/movetaskToQaList/${qaTaskupdate._id}`,
        {}, 
        { withCredentials: true }
      );
  
      alert(res.data.msg);
      console.log("Move to QA Response:", res.data);
  
      // Update your task list in frontend too
      const updatedTasks = tasks.map(task =>
        task._id === qaTaskupdate._id
          ? { ...task, qaStatus: true, status: "completed" }
          : task
      );
      setTasks(updatedTasks);
  
    } catch (error) {
      alert("Failed to move to QA List");
      console.error("Error moving task to QA list:", error);
    } finally {
      setIsMovingToQA(false);
    }
  };
  



  return (
    <div className="bg-[#1c1c1c] p-6 rounded mt-12 max-h-[500px] overflow-auto shadow-xl">
      <h1 className="text-white text-xl font-semibold mb-4">All Tasks</h1>

      {tasks.length === 0 ? (
        <p className="text-gray-400 text-sm">No tasks found.</p>
      ) : (
        tasks.map((task, idx) => (
          <div
            key={task.id || idx}
            className="mb-4 p-4 rounded-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 shadow-lg hover:scale-102 transition-transform duration-200"
          >
            <div className="flex justify-between mb-2">
              <button
                onClick={() => handleDelete(task._id, task.taskName)}
                className="bg-green-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
              >
                Delete
              </button>
              {/* <button className="bg-yellow-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
               onClick={() => handleMoveToQA(task)}
              >Move To QA</button> */}
              <button
                onClick={() => handleMoveToQA(task)}
                disabled={isMovingToQA}
                className={`bg-yellow-600 text-lg font-medium text-white px-5 py-2 rounded-sm ${isMovingToQA ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isMovingToQA ? 'Moving...' : 'Move To QA'}
              </button>

              <button
                onClick={() => handleEditClick(task)}
                className="bg-green-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
              >
                Edit
              </button>

            </div>

            <div className="mb-2">
              <h2 className="text-lg font-semibold text-white">{task.taskName}</h2>
              <p className="text-sm text-gray-300 italic">{task.description}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm mt-2">
              <div>
                <span className="text-gray-200 font-medium">Project:</span>{' '}
                <span className="text-white">{task.Project}</span>
              </div>
              <div>
                <span className="text-gray-200 font-medium">Assigned To:</span>{' '}
                <span className="text-white">{task.assignTo}</span>
              </div>
              <div>
                <span className="text-gray-200 font-medium">Assigned By:</span>{' '}
                <span className="text-white">{task.assignBy}</span>
              </div>
              <div>
                <span className="text-gray-200 font-medium">Status:</span>{' '}
                <span className="text-white">{task.status}</span>
              </div>
              <div>
                <span className="text-gray-200 font-medium">Priority:</span>{' '}
                <span
                  className={`text-white px-2 py-1 rounded-full ${task.priority === 'High'
                    ? 'bg-red-600'
                    : task.priority === 'Medium'
                      ? 'bg-yellow-600'
                      : 'bg-green-600'
                    }`}
                >
                  {task.priority}
                </span>
              </div>
              <div>
                {/* <span className="text-gray-200 font-medium">Due Date:</span>{' '}
                <span className="text-white">{task.dueDate}</span> */}
              </div>
            </div>
          </div>
        ))
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>

            {/* Here call CreateTask */}
            <CreateTask
              isEditMode={true}
              initialData={taskToEdit}
              onSave={handleTaskUpdate}
              onCancel={() => setIsEditModalOpen(false)}
            />
          </div>
        </div>
      )}

    </div>


  );
};

export default AllTask;
