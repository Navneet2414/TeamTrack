import React, { useState } from 'react';

const AddProjectTeam = () => {
  const [projectName, setProjectName] = useState('');
  const [members, setMembers] = useState(['', '', '', '', '']);
  const [teamLead, setTeamLead] = useState('');
  const [teamList, setTeamList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleMemberChange = (index, value) => {
    const updatedMembers = [...members];
    updatedMembers[index] = value;
    setMembers(updatedMembers);
  };

  const resetForm = () => {
    setProjectName('');
    setMembers(['', '', '', '', '']);
    setTeamLead('');
    setEditIndex(null);
  };

  const handleCreateOrUpdateTeam = () => {
    if (!projectName || !teamLead) {
      alert('Please fill in Project Name and Team Lead');
      return;
    }

    const updatedTeam = {
      projectName,
      members: members.filter((m) => m.trim() !== ''),
      teamLead,
    };

    if (editIndex !== null) {
      const updatedList = [...teamList];
      updatedList[editIndex] = updatedTeam;
      setTeamList(updatedList);
    } else {
      setTeamList([...teamList, updatedTeam]);
    }

    resetForm();
  };

  const handleEdit = (index) => {
    const team = teamList[index];
    setProjectName(team.projectName);
    setTeamLead(team.teamLead);
    setMembers([...team.members, '', '', '', '', ''].slice(0, 5));
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = teamList.filter((_, i) => i !== index);
    setTeamList(filtered);
    resetForm();
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Form */}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter Project Name"
            className="w-full border text-gray-800 bg-white rounded px-3 py-2"
          />
        </div>

        {members.map((member, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-gray-700 font-bold mb-2">Member {index + 1}</label>
            <input
              type="text"
              value={member}
              onChange={(e) => handleMemberChange(index, e.target.value)}
              placeholder={`Member ${index + 1}`}
              className="w-full border text-gray-800 bg-white rounded px-3 py-2"
            />
          </div>
        ))}

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Team Lead</label>
          <input
            type="text"
            value={teamLead}
            onChange={(e) => setTeamLead(e.target.value)}
            placeholder="Enter Team Lead"
            className="w-full border text-gray-800 bg-white rounded px-3 py-2"
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={handleCreateOrUpdateTeam}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {editIndex !== null ? 'Edit Team' : 'Create Team'}
          </button>

          {editIndex !== null && (
            <button
              type="button"
              onClick={resetForm}
              className="text-red-500 hover:text-red-700 font-bold text-sm"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* Created Team List */}
      {teamList.length > 0 ? (
        <div className="bg-gray-50 p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2 text-blue-800">Created Teams</h2>
          {teamList.map((team, idx) => (
            <ul key={idx} className="list-disc list-inside mb-4 border-t-2 border-b-2 border-gray-300">
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(idx)}
                  style={{ backgroundColor: 'red' }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(idx)}
                  style={{ backgroundColor: 'red' }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>

              <li><strong className="text-gray-800">Project:</strong> <span className="text-gray-800">{idx + 1}</span></li>
              <li><strong className="text-gray-800">Project Name:</strong><span className="text-gray-800">{team.projectName}</span></li>
              {team.members.map((m, i) => (
                <li key={i}><strong className="text-gray-800">Member {i + 1}:</strong> <span className="text-gray-800">{m}</span></li>
              ))}
              <li><strong className="text-gray-800">Team Lead:</strong> <span className="text-gray-800">{team.teamLead}</span></li>
            </ul>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No teams created yet.</p>
      )}

      <p className="text-center text-gray-500 text-xs mt-6">
        ©2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default AddProjectTeam;
