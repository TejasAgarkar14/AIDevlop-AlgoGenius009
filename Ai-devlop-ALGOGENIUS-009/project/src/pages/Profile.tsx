import React from 'react';
import { Settings, Bell, Shield, User } from 'lucide-react';

const Profile = () => {
  return (
    <div className="pt-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 opacity-0 animate-fade-in">
        Profile Settings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
                alt="Profile"
                className="h-24 w-24 rounded-full border-4 border-indigo-200"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-900">Alex Morgan</h2>
              <p className="text-gray-500">Student</p>
              <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                Edit Profile
              </button>
            </div>

            <div className="mt-6 space-y-2">
              <button className="w-full flex items-center space-x-2 text-gray-600 hover:text-indigo-600 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <User className="h-5 w-5" />
                <span>Personal Info</span>
              </button>
              <button className="w-full flex items-center space-x-2 text-gray-600 hover:text-indigo-600 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </button>
              <button className="w-full flex items-center space-x-2 text-gray-600 hover:text-indigo-600 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Shield className="h-5 w-5" />
                <span>Privacy</span>
              </button>
              <button className="w-full flex items-center space-x-2 text-gray-600 hover:text-indigo-600 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value="Alex Morgan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value="alex.morgan@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  rows={4}
                  defaultValue="Computer Science student passionate about web development and artificial intelligence."
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  Cancel
                </button>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;