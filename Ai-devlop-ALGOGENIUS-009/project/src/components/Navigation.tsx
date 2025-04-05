import React from 'react';
import { NavLink } from 'react-router-dom';
import { GraduationCap, Users, MessageSquare, Layout, BookOpen, TestTube2, UserCircle } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { icon: Layout, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Study Groups', path: '/study-groups' },
    { icon: BookOpen, label: 'Resources', path: '/resources' },
    { icon: MessageSquare, label: 'Communication', path: '/communication' },
    { icon: TestTube2, label: 'Assessment', path: '/assessment' },
    { icon: UserCircle, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900">LearnSpace</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center space-x-2 transition-colors duration-200
                  ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}
                `}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
              alt="Profile"
              className="h-8 w-8 rounded-full border-2 border-indigo-200"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;