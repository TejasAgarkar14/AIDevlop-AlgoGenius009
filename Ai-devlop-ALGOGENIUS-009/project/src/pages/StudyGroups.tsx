import React from 'react';
import { Users, Video, Clock, Calendar } from 'lucide-react';

const StudyGroups = () => {
  const groups = [
    {
      name: "Advanced Mathematics",
      members: 12,
      nextMeeting: "Today, 3:00 PM",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop"
    },
    {
      name: "Web Development",
      members: 8,
      nextMeeting: "Tomorrow, 2:00 PM",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      name: "Data Science",
      members: 15,
      nextMeeting: "Thursday, 4:00 PM",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="pt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 opacity-0 animate-fade-in">
          Study Groups
        </h1>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
          Create New Group
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.name}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={group.image}
              alt={group.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{group.name}</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{group.nextMeeting}</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors duration-200">
                Join Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyGroups;