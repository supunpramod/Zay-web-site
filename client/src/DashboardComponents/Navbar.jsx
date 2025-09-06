import React from 'react';
import { FaSignOutAlt, FaBell, FaSearch, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Clear user session / token
    localStorage.removeItem('token'); // example only
    // 2. Redirect to login page
    navigate('/login');
  };

  return (
    <header className="bg-green-200 shadow-sm sticky top-0 z-20">
      <div className="flex items-center justify-between px-6 py-2">
        {/* Left section */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 mr-4 rounded-lg hover:bg-gray-100"
          >
            <FaBars className="text-indigo-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="ml-6 text-gray-600 hidden md:block">
            Welcome back, {user?.name || "User"}
          </p>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-500 hover:text-gray-700">
            <FaBell className="text-xl" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
