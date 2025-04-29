import React, { useEffect, useState } from 'react';
import axios from "axios";

const QaList = () => {
  const [qaData, setQaData] = useState([]);
  const [task, setTask] = useState();
  const [showFailedPopup, setShowFailedPopup] = useState(false);
  const [failedTaskData, setFailedTaskData] = useState(null);
  const [failedDescription, setfailedDescription] = useState('');
  const [mediaFiles, setMediaFiles] = useState([]);


  useEffect(() => {
    const fetchQaData = async () => {
      try {
        const res = await axios.get("http://localhost:7000/api/employee/getQaListTask");
        console.log("fetchQaData", res.data);

        if (res.data && res.data.record) {
          setQaData(res.data.record);
        }
      } catch (error) {
        console.error("Failed to fetch QA data:", error);
      }
    };
    fetchQaData();
  }, []);

  const qaTaskCompletedhandle = async (completedTask) => {
    try {
      const formData = new FormData();
      formData.append('taskStatus', 'closed'); // you can send any field if needed
  
      const res = await axios.post(
        `http://localhost:7000/api/employee/closeQaListTask/${completedTask._id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );
  
      alert("QA task completed and closed");
      console.log("QA Completed Task", res);
  
      const updatedTasks = qaData.map(task =>
        task._id === completedTask._id
          ? { ...task, taskStatus: "closed" }
          : task
      );
      setQaData(updatedTasks);
  
    } catch (error) {
      alert("QA Task not marked as closed");
      console.error("QA task not marked as closed", error);
    }
  };
  
  const handleFailedSubmit = async (taskId, failedDescription, files = []) => {
    const formData = new FormData();
    formData.append('description', failedDescription);
  
    // Append each selected file to 'media'
    for (let i = 0; i < files.length; i++) {
      formData.append('media', files[i]);
    }
  
    try {
      const res = await axios.post(
        `http://localhost:7000/api/employee/failedQaTaskList/${taskId}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );
      alert("Task moved to Failed List successfully");
      console.log("Task moved to failed list", res.data);
    } catch (error) {
      alert("Failed to move Qa Task");
      console.error("Failed to move Qa task:", error);
    }
  };
  



  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md mt-5 max-h-[500px] overflow-auto">
      <h2 className="text-xl font-semibold mb-4">Task Q&A List</h2>

      {qaData.length > 0 ? (
        qaData.map((task, index) => (
          <div
            key={task._id || index}
            className="mb-6 p-4 rounded-md bg-gray-800 hover:bg-gray-700 transition duration-200"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-4">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={() => qaTaskCompletedhandle(task)}

                >
                  Completed
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => {
                    setFailedTaskData(task);
                    setShowFailedPopup(true);
                  }}
                >
                  Failed
                </button>

              </div>

              <span className="text-sm text-gray-300">{task.Date}</span>
            </div>

            <h3 className="text-lg font-bold text-blue-400">Task: {task.taskName}</h3>

            <p className="mt-2 text-green-300">
              <span className="font-semibold">failedDescription:</span> {task.failedDescription}
            </p>

            <div className="mt-2 text-sm text-gray-400">
              <p>Assign To: <span className="text-white">{task.assignTo}</span></p>
              <p>Assign By: <span className="text-white">{task.assignBy}</span></p>
              <p>Category: <span className="text-white">{task.category}</span></p>
              {/* <p>Priority: <span className="text-white">{task.priority}</span></p> */}
              {/* <p>Status: <span className="text-white capitalize">{task.status}</span></p> */}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No tasks found.</p>
      )}
      {showFailedPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-full max-w-md relative">

            <h2 className="text-xl font-semibold mb-4">Mark Task as Failed</h2>

            <textarea
              className="w-full border p-2 rounded mb-4"
              rows="4"
              placeholder="Enter failure description..."
              value={failedDescription}
              onChange={(e) => setfailedDescription(e.target.value)}
            />

            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={(e) => setMediaFiles(e.target.files)}
              className="mb-4"
            />

            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={() => {
                  setShowFailedPopup(false);
                  setfailedDescription('');
                  setMediaFiles([]);
                }}
              >
                Cancel
              </button>

              <button
                className="bg-red-600 text-white px-4 py-2 rounded"
                // onClick={() => handleFailedSubmit(failedTaskData._id, failedDescription, files)}
                onClick={() => {
                  handleFailedSubmit(failedTaskData._id, failedDescription, mediaFiles);
                  setShowFailedPopup(false);
                }}
              >
                Submit
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default QaList;
