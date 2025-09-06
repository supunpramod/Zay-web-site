import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../DashboardComponents/AuthContext';
import axios from 'axios';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const stats = [
    { title: 'Total Users', value: '1,248', change: '+12%', icon: '👥' },
    { title: 'Revenue', value: '$24,580', change: '+8.2%', icon: '💰' },
    { title: 'Active Sessions', value: '328', change: '+5.4%', icon: '📊' },
    { title: 'Conversion Rate', value: '4.8%', change: '+1.2%', icon: '📈' }
  ];

  const recentActivities = [
    { user: 'John Doe', action: 'Created new project', time: '2 min ago' },
    { user: 'Jane Smith', action: 'Updated profile', time: '15 min ago' },
    { user: 'Robert Johnson', action: 'Completed task', time: '1 hour ago' },
    { user: 'Emily Davis', action: 'Uploaded files', time: '3 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">Dashboard</div>
            <div className="ml-6 text-gray-600 hidden md:block">Welcome back, {user?.name}</div>
          </div>
          <button
            onClick={handleLogout}
            className="btn bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="text-2xl">{stat.icon}</div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-500 font-medium">{stat.change}</span>
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
              <h2 className="text-xl font-bold text-gray-800 mb-4">Revenue Overview</h2>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Chart will be displayed here</p>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gray-100 rounded-full p-2 mr-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                        {activity.user.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-gray-600 text-sm">{activity.action}</p>
                    </div>
                    <div className="ml-auto text-gray-500 text-sm">{activity.time}</div>
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
                {['Add User', 'Create Report', 'Upload Data', 'Settings'].map((action, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {action}
                  </button>
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
                  <div key={index} className="border-l-4 border-primary pl-4 py-1">
                    <h3 className="font-medium">{announcement.title}</h3>
                    <p className="text-gray-600 text-sm">{announcement.desc}</p>
                    <p className="text-gray-500 text-xs mt-1">{announcement.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;