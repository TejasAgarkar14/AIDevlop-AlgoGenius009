import React from 'react';
import { FileText, Video, Book, Download } from 'lucide-react';

const ResourceLibrary = () => {
  const resources = [
    {
      title: "Introduction to React Hooks",
      type: "Document",
      size: "2.4 MB",
      icon: FileText,
      updated: "2 days ago"
    },
    {
      title: "Advanced CSS Techniques",
      type: "Video",
      size: "45 MB",
      icon: Video,
      updated: "1 week ago"
    },
    {
      title: "Data Structures Guide",
      type: "Book",
      size: "12 MB",
      icon: Book,
      updated: "3 days ago"
    }
  ];

  return (
    <div className="pt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 opacity-0 animate-fade-in">
          Resource Library
        </h1>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
          Upload Resource
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <resource.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{resource.title}</h3>
                  <p className="text-sm text-gray-500">
                    {resource.type} • {resource.size} • Updated {resource.updated}
                  </p>
                </div>
              </div>
              <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
                <Download className="h-5 w-5" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceLibrary;