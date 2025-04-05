import React from 'react';
import { MessageSquare, Video, Users } from 'lucide-react';

const Communication = () => {
  const chats = [
    {
      name: "Team Alpha",
      lastMessage: "Great work on the presentation!",
      time: "2m ago",
      unread: 3,
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop"
    },
    {
      name: "Project Discussion",
      lastMessage: "When should we schedule the next meeting?",
      time: "5m ago",
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      name: "Study Group",
      lastMessage: "I've shared the notes in the resources section",
      time: "1h ago",
      unread: 1,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="pt-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 opacity-0 animate-fade-in">
        Communication Hub
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Chats</h2>
            <button className="text-indigo-600 hover:text-indigo-700">
              <MessageSquare className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            {chats.map((chat) => (
              <div
                key={chat.name}
                className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
              >
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Meetings</h2>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Schedule Meeting
            </button>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">Project Review</h3>
                <span className="text-sm text-gray-500">Today, 2:00 PM</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="participant"
                    className="h-8 w-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="participant"
                    className="h-8 w-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                    alt="participant"
                    className="h-8 w-8 rounded-full border-2 border-white"
                  />
                </div>
                <span className="text-sm text-gray-500">+2 others</span>
                <button className="ml-auto bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors duration-200">
                  Join Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;