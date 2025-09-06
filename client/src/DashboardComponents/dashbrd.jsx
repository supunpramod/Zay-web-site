import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../DashboardComponents/AuthContext';
import { FaUserPlus, FaChartBar, FaUpload, FaCog, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import the components
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const stats = [
    { title: 'Total Users', value: '1,248', change: '+12%', icon: '👥', color: 'bg-blue-500' },
    { title: 'Revenue', value: '$24,580', change: '+8.2%', icon: '💰', color: 'bg-green-500' },
    { title: 'Active Sessions', value: '328', change: '+5.4%', icon: '📊', color: 'bg-purple-500' },
    { title: 'Conversion Rate', value: '4.8%', change: '+1.2%', icon: '📈', color: 'bg-orange-500' }
  ];

  const recentActivities = [
    { user: 'John Doe', action: 'Created new project', time: '2 min ago', avatarColor: 'bg-blue-400' },
    { user: 'Jane Smith', action: 'Updated profile', time: '15 min ago', avatarColor: 'bg-pink-400' },
    { user: 'Robert Johnson', action: 'Completed task', time: '1 hour ago', avatarColor: 'bg-green-400' },
    { user: 'Emily Davis', action: 'Uploaded files', time: '3 hours ago', avatarColor: 'bg-purple-400' }
  ];

  const quickActions = [
    { title: 'Add User', icon: <FaUserPlus /> },
    { title: 'Create Report', icon: <FaChartBar /> },
    { title: 'Upload Data', icon: <FaUpload /> },
    { title: 'Settings', icon: <FaCog /> },
    { title: 'Contacts', icon: <FaComments /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
        user={user} 
        quickActions={quickActions} 
      />
      
      <div className="flex-1 lg:ml-0">
        <Navbar 
          user={user} 
          handleLogout={handleLogout} 
          toggleSidebar={toggleSidebar} 
        />
        
        <main className="flex-1 overflow-y-auto pt-2">
          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                    </div>
                    <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-green-500 font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                      </svg>
                      {stat.change}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">from last month</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Chart Placeholder */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Revenue Overview</h2>
                    <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                      View Report
                    </button>
                  </div>
                  <div className="h-64 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FaChartBar className="text-indigo-600 text-2xl" />
                      </div>
                      <p className="text-indigo-700 font-medium">Revenue chart visualization</p>
                    </div>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Recent Activities</h2>
                    <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                      See all
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${activity.avatarColor}`}>
                          {activity.user.charAt(0)}
                        </div>
                        <div className="ml-4 flex-1">
                          <p className="font-medium text-gray-800">{activity.user}</p>
                          <p className="text-gray-600 text-sm">{activity.action}</p>
                        </div>
                        <div className="text-gray-500 text-sm">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
                  <div className="space-y-3">
                    {quickActions.map((action, index) => (
                      action.title === 'Contacts' ? (
                        <Link
                          to="/contactshow"
                          key={index}
                          className="flex items-center w-full p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors group"
                        >
                          <div className="text-lg mr-3">{action.icon}</div>
                          <span className="font-medium text-gray-700 group-hover:text-indigo-700">{action.title}</span>
                        </Link>
                      ) : (
                        <button
                          key={index}
                          className="flex items-center w-full p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors group"
                        >
                          <div className="text-lg mr-3">{action.icon}</div>
                          <span className="font-medium text-gray-700 group-hover:text-indigo-700">{action.title}</span>
                        </button>
                      )
                    ))}
                  </div>
                </div>

                {/* Announcements */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Announcements</h2>
                  <div className="space-y-4">
                    {[
                      { title: 'System Maintenance', desc: 'Scheduled for this weekend', time: '2 days ago' },
                      { title: 'New Feature Release', desc: 'Check out our latest updates', time: '1 week ago' }
                    ].map((announcement, index) => (
                      <div key={index} className="border-l-4 border-indigo-500 pl-4 py-2">
                        <h3 className="font-medium text-gray-800">{announcement.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{announcement.desc}</p>
                        <p className="text-gray-500 text-xs mt-2">{announcement.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;