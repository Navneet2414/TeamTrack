import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddProjectTeam = () => {
  const [projectName, setProjectName] = useState('');
  const [members, setMembers] = useState(['']);
  const [teamLead, setTeamLead] = useState(['']);
  const [teamList, setTeamList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/employee/getprojectteamList', {
          withCredentials: true,
        });
        const teamData = Array.isArray(response.data)
          ? response.data
          : response.data?.data || [];
        setTeamList(teamData);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };
    fetchTeamData();
  }, []);

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const handleTeamLeadChange = (index, value) => {
    const updated = [...teamLead];
    updated[index] = value;
    setTeamLead(updated);
  };

  const resetForm = () => {
    setProjectName('');
    setMembers(['']);
    setTeamLead(['']);
    setEditIndex(null);
  };

  const handleCreateOrUpdateTeam = async () => {
    if (!projectName || teamLead.some((lead) => lead.trim() === '')) {
      alert('Please fill in Project Name and Team Lead');
      return;
    }

    const updatedTeam = {
      projectName,
      member: members.filter((m) => m.trim()),
      teamLead: teamLead.filter((t) => t.trim()),
    };

    try {
      const res = await axios.post('http://localhost:7000/api/employee/addprojectteam', updatedTeam);
      const newRecord = res.data.record;
      alert(editIndex !== null ? "Team updated successfully!" : "Team created successfully!");
      const updatedList = editIndex !== null
        ? teamList.map((team, i) => (i === editIndex ? newRecord : team))
        : [...teamList, newRecord];
      setTeamList(updatedList);
      resetForm();
    } catch (error) {
      alert("Failed to create team!");
      console.error("API error:", error);
    }
  };

  const handleEdit = (index) => {
    const team = teamList[index];
    setProjectName(team.projectName);
    setMembers([...team.member]);
    setTeamLead([...team.teamLead]);
    setEditIndex(index);
  };

  // const handleDelete = (index) => {
  //   const filtered = teamList.filter((_, i) => i !== index);
  //   setTeamList(filtered);
  //   resetForm();
  // };
  const handleDelete = async (index) => {
    const teamToDelete = filteredTeams[index];
    const confirmDelete = window.confirm(`Are you sure you want to delete "${teamToDelete.projectName}"?`);
  
    if (!confirmDelete) return;
    
    try {
      const res = await axios.delete(`http://localhost:7000/api/employee/deleteprojectteamList/${teamToDelete._id}`);
      alert('Team deleted successfully!');
      console.log(res.data.msg); // optional logging
  
      // Re-filter and update teamList state after deletion
      const updatedList = teamList.filter((team) => team._id !== teamToDelete._id);
      setTeamList(updatedList);
    } catch (error) {
      alert('Failed to delete the team.');
      console.error('Delete error:', error);
    }
  };
  
  

  const filteredTeams = teamList.filter(team =>
    team.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.member.some(m => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
    team.teamLead.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredTeams.length / recordsPerPage);

  const paginatedTeams = filteredTeams.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <h1 className='text-red-700 font-extrabold mb-4'>Add Project Team</h1>
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
        <button
          type="button"
          onClick={() => setMembers([...members, ''])}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mb-4"
        >
          + Add Member
        </button>

        {teamLead.map((lead, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-gray-700 font-bold mb-2">Team Lead {index + 1}</label>
            <input
              type="text"
              value={lead}
              onChange={(e) => handleTeamLeadChange(index, e.target.value)}
              placeholder={`Team Lead ${index + 1}`}
              className="w-full border text-gray-800 bg-white rounded px-3 py-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => setTeamLead([...teamLead, ''])}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mb-4"
        >
          + Add Team Lead
        </button>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={handleCreateOrUpdateTeam}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {editIndex !== null ? 'Update Team' : 'Create Team'}
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

      {/* <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search by project, member, or lead"
          className=" text-gray-800 w-full border px-3 py-2 rounded"
        />
      </div> */}

      {teamList.length > 0 ? (
        <div className="bg-gray-800 p-4 rounded shadow overflow-x-auto">
            
          <h2 className="text-lg font-bold mb-2 text-blue-800">Created Teams</h2>
          <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search by project, member, or lead"
          className=" text-gray-800 w-full border px-3 py-2 rounded"
        />
      </div>
          <table className="min-w-full text-sm text-left text-gray-900 border border-gray-300">
            <thead className="bg-gray-600 text-gray-900 font-bold">
              <tr>
                <th className=" text-gray-800  px-4 py-2 border">#</th>
                <th className=" text-gray-800 px-4 py-2 border">Project Name</th>
                <th className=" text-gray-800 -4 py-2 border">Members</th>
                <th className=" text-gray-800 px-4 py-2 border">Team Leads</th>
                <th className="text-gray-800  px-4 py-2 border">Delivery Date</th>
                <th className=" text-gray-800 px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTeams.map((team, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                  <td className=" text-gray-800 px-4 py-2 border font-bold">{(currentPage - 1) * recordsPerPage + index + 1}</td>
                  <td className="text-gray-800 px-4 py-2 border font-bold">{team.projectName}</td>
                  <td className=" text-gray-800 px-4 py-2 border font-bold">{(team.member || []).join(', ')}</td>
                  <td className=" text-gray-800  px-4 py-2 border font-bold">{(team.teamLead || []).join(', ')}</td>
                  <td className="text-gray-800 px-4 py-2 border font-bold">{team.deliveryDate || 'N/A'}</td>
                  <td className=" text-gray-800 px-4 py-2 border space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 hover:bg-yellow-700 m-2 text-white font-bold py-1 px-3 rounded"
                    >
                      Edit
                    </button>
                    <button
                      // onClick={() => handleDelete((currentPage - 1) * recordsPerPage + index)}
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-700 m-2 text-white font-bold py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center items-center mt-4 space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No teams created yet.</p>
      )}

      <p className="text-center text-gray-500 text-xs mt-6">
        ©2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default AddProjectTeam;
