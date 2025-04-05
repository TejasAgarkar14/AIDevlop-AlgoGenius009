import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const Assessment = () => {
  const assignments = [
    {
      title: "React Components Quiz",
      dueDate: "March 15, 2024",
      status: "completed",
      score: "95%",
      icon: CheckCircle2,
      iconColor: "text-green-500"
    },
    {
      title: "CSS Grid Layout Project",
      dueDate: "March 20, 2024",
      status: "in-progress",
      progress: "60%",
      icon: Clock,
      iconColor: "text-yellow-500"
    },
    {
      title: "JavaScript Fundamentals Test",
      dueDate: "March 25, 2024",
      status: "upcoming",
      icon: AlertCircle,
      iconColor: "text-blue-500"
    }
  ];

  return (
    <div className="pt-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 opacity-0 animate-fade-in">
        Assessment Center
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Overall Progress</h3>
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full border-4 border-indigo-600 flex items-center justify-center">
              <span className="text-xl font-bold text-indigo-600">85%</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Course Completion</p>
              <p className="text-sm font-medium text-gray-900">12 of 15 modules completed</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Scores</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Quiz 1</span>
              <span className="text-sm font-medium text-gray-900">95%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Assignment 2</span>
              <span className="text-sm font-medium text-gray-900">88%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Upcoming Due Dates</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Project Submission</span>
              <span className="text-sm font-medium text-gray-900">March 20</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Final Quiz</span>
              <span className="text-sm font-medium text-gray-900">March 25</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Current Assignments</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {assignments.map((assignment) => (
            <div
              key={assignment.title}
              className="p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <assignment.icon className={`h-6 w-6 ${assignment.iconColor}`} />
                  <div>
                    <h3 className="font-medium text-gray-900">{assignment.title}</h3>
                    <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  {assignment.status === 'completed' && (
                    <span className="text-green-500 font-medium">{assignment.score}</span>
                  )}
                  {assignment.status === 'in-progress' && (
                    <div className="flex items-center space-x-2">
                      <div className="bg-gray-200 h-2 w-24 rounded-full">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: assignment.progress }}
                        />
                      </div>
                      <span className="text-gray-500">{assignment.progress}</span>
                    </div>
                  )}
                  {assignment.status === 'upcoming' && (
                    <button className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors duration-200">
                      Start
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assessment;