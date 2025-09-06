import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaBars } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, toggleSidebar, user, quickActions }) => {
  return (
    <div className={`bg-gradient-to-b from-indigo-800 to-indigo-900 text-white h-screen fixed lg:static transform transition-transform duration-300 ${sidebarOpen ? 'w-64 translate-x-0' : '-translate-x-full w-64'} lg:translate-x-0 z-30 shadow-xl`}>
      <div className="p-5 flex items-center justify-between border-b border-indigo-700">
        <h1 className="text-xl font-bold">AdminPanel</h1>
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-full hover:bg-indigo-700 transition-colors"
        >
          <FaBars />
        </button>
      </div>
      
      <div className="p-5 mt-4">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div className="ml-3">
            <h3 className="font-semibold">{user?.name || 'User'}</h3>
            <p className="text-sm text-indigo-200">Administrator</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {quickActions.map((action, index) => (
            action.title === 'Contacts' ? (
              <Link
                to="/contactshow"
                key={index}
                className="flex items-center p-3 rounded-lg text-indigo-100 hover:bg-indigo-700 transition-colors group"
              >
                <div className="text-lg mr-3">{action.icon}</div>
                <span className="font-medium">{action.title}</span>
              </Link>
            ) : (
              <button
                key={index}
                className="flex items-center w-full p-3 rounded-lg text-indigo-100 hover:bg-indigo-700 transition-colors group"
              >
                <div className="text-lg mr-3">{action.icon}</div>
                <span className="font-medium">{action.title}</span>
              </button>
            )
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-0 w-full p-5 border-t border-indigo-700">
        <button className="flex items-center w-full p-3 rounded-lg text-indigo-100 hover:bg-indigo-700 transition-colors">
          <FaCog className="text-lg mr-3" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;