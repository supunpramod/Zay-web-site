import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { email, password, remember } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        localStorage.setItem('token', data.token);
        if (remember) localStorage.setItem('rememberEmail', email);
        setIsAuthenticated(true);
      } else {
        setErrorMessage(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md border border-white border-opacity-20 overflow-hidden">
        <div className="p-1 bg-gradient-to-r from-blue-400 to-purple-500">
          <div className="bg-gray-900 p-10 rounded-2xl">
            <h1 className="text-4xl font-bold text-white text-center mb-2 animate-pulse">Admin Portal</h1>
            <p className="text-gray-300 text-center mb-6">Sign in to access your dashboard</p>

            {errorMessage && (
              <div className="bg-red-600 text-white px-4 py-2 rounded mb-4 text-center animate-shake">
                {errorMessage}
              </div>
            )}

            <form onSubmit={onSubmit}>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                  required
                />
              </div>

              <div className="mb-4 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                  required
                />
                <span
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="mb-6 flex items-center justify-between text-gray-300 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="remember" checked={remember} onChange={onChange} className="accent-purple-500" />
                  Remember Me
                </label>
                <a href="#" className="hover:text-white transition-colors">Forgot Password?</a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 ${
                  loading ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <p className="text-gray-400 text-center mt-6 text-sm">
              Don't have an account? <a href="/register" className="text-purple-400 hover:text-purple-200">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
