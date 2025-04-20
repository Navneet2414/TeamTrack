import React from 'react';

const qaData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
    askedBy: "Alice",
    answeredBy: "Bob",
    date: "2025-04-15"
  },
  {
    id: 2,
    question: "How does useState work?",
    answer: "useState is a hook that lets you add React state to function components.",
    askedBy: "Charlie",
    answeredBy: "Diana",
    date: "2025-04-16"
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML and allows you to write HTML inside JavaScript.",
    askedBy: "Ethan",
    answeredBy: "Fiona",
    date: "2025-04-17"
  }
];

const QaList = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md mt-5 max-h-[500px] overflow-auto">
      <h2 className="text-xl font-semibold mb-4">Q&A List</h2>
      {qaData.map((qa) => (
        <div
          key={qa.id}
          className="mb-4 p-4 rounded-md bg-gray-800 hover:bg-gray-700 transition duration-200"
        >
            <div className="flex justify-between">
              <div>
                <button className="bg-green-600 text-lg font-medium text-white px-5 py-2 rounded-sm">Completed</button>
              </div>
              
              <div>
                <button className='bg-green-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Failed</button>
              </div>
            </div>
          <h3 className="text-lg font-bold text-blue-400">Q: {qa.question}</h3>
          <p className="mt-2 text-green-300">
            <span className="font-semibold">A:</span> {qa.answer}
          </p>
          <div className="mt-2 text-sm text-gray-400">
            <p>Asked by: <span className="text-white">{qa.askedBy}</span></p>
            <p>Answered by: <span className="text-white">{qa.answeredBy}</span></p>
            <p>Date: <span className="text-white">{qa.date}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QaList;
