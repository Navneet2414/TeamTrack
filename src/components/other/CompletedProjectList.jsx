import React from 'react';
import { CheckCircle, Clock, FlaskConical } from 'lucide-react';

const completedProjects = [
  {
    id: 1,
    projectName: "Website Redesign",
    teamLead: "Alice Johnson",
    completionDate: "2025-03-28",
    summary: "Revamped the company website for a modern look and mobile responsiveness.",
    status: "Completed"
  },
  {
    id: 2,
    projectName: "Mobile App Launch",
    teamLead: "Bob Smith",
    completionDate: "2025-02-15",
    summary: "Launched a cross-platform mobile app with core features and user authentication.",
    status: "On Testing"
  },
  {
    id: 3,
    projectName: "Marketing Automation",
    teamLead: "Carol White",
    completionDate: "2025-01-30",
    summary: "Integrated marketing automation tools and workflows for better lead generation.",
    status: "Ongoing"
  }
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'Completed':
      return {
        color: 'text-green-400',
        bg: 'bg-green-800/30',
        icon: <CheckCircle size={16} className="text-green-400 mr-1" />
      };
    case 'Ongoing':
      return {
        color: 'text-yellow-400',
        bg: 'bg-yellow-800/30',
        icon: <Clock size={16} className="text-yellow-400 mr-1" />
      };
    case 'On Testing':
      return {
        color: 'text-blue-400',
        bg: 'bg-blue-800/30',
        icon: <FlaskConical size={16} className="text-blue-400 mr-1" />
      };
    default:
      return { color: 'text-gray-300', bg: 'bg-gray-700' };
  }
};

const CompletedProjectList = () => {
  return (
    <div className="p-6 bg-gradient-to-tr from-[#1f1f1f] to-[#2b2b2b] rounded-lg shadow-2xl mt-6 max-h-[600px] overflow-y-auto">
      <h2 className="text-white text-2xl font-bold mb-6 tracking-tight">Completed Projects Overview</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {completedProjects.map((project) => {
          const { color, bg, icon } = getStatusStyle(project.status);
          return (
            <div
              key={project.id}
              className="p-5 rounded-xl backdrop-blur-md border border-white/10 bg-white/5 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-white">{project.projectName}</h3>
                <span className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${bg} ${color}`}>
                  {icon} {project.status}
                </span>
              </div>
              <p className="text-gray-300 text-sm mt-2 italic">{project.summary}</p>
              <div className="text-sm mt-4 text-gray-400 space-y-1">
                <p><span className="text-white font-medium">Team Lead:</span> {project.teamLead}</p>
                <p><span className="text-white font-medium">Completion Date:</span> {project.completionDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompletedProjectList;
