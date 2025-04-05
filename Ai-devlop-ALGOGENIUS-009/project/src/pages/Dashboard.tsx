import React, { useState, useEffect } from 'react';
import { Users, Video, FileText, Calendar } from 'lucide-react';
import LazyImage from '../components/LazyImage';
import ShareButtons from '../components/ShareButtons';
import BackToTop from '../components/BackToTop';

const Dashboard = () => {
  const [displayText, setDisplayText] = useState('');
  const welcomeText = 'Welcome back, Alex';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= welcomeText.length) {
        setDisplayText(welcomeText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const activities = [
    { user: "Sarah Chen", action: "started a new discussion", time: "2 minutes ago", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { user: "Michael Park", action: "submitted assignment", time: "5 minutes ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    { user: "Emma Wilson", action: "scheduled a meeting", time: "10 minutes ago", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
  ];

  return (
    <div className="min-h-screen animate-gradient">
      <div className="pt-20 relative z-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 typewriter">
          {displayText}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Users, label: 'Active Sessions', value: '3', color: 'bg-blue-500' },
            { icon: Video, label: 'Upcoming Meetings', value: '2', color: 'bg-green-500' },
            { icon: FileText, label: 'Pending Tasks', value: '5', color: 'bg-purple-500' },
            { icon: Calendar, label: 'Events Today', value: '1', color: 'bg-pink-500' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-gray-500 text-sm">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            <ShareButtons url={window.location.href} title="Check out my learning progress!" />
          </div>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <LazyImage
                  src={activity.avatar}
                  alt={activity.user}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-gray-900">
                    <span className="font-medium">{activity.user}</span>{' '}
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default Dashboard;