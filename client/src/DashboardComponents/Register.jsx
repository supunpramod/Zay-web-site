import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const { name, email, password, confirmPassword } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }
    
    try {
      // Here you would typically make an API call to register the user
      // For demo purposes, we'll simulate a successful registration
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1500);
    } catch (err) {
      setError('Registration failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-white border-opacity-20">
        <div className="p-1 bg-gradient-to-r from-blue-400 to-purple-500">
          <div className="bg-gray-900 p-8 rounded-xl">
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white">Create Account</h1>
              <p className="text-gray-300 mt-2">Join our admin platform today</p>
            </div>
            
            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-green-900 bg-opacity-50 border border-green-700 rounded-lg text-green-300 text-center">
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Registration successful! Please check your email to verify your account.</span>
                </div>
              </div>
            )}
            
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-900 bg-opacity-50 border border-red-700 rounded-lg text-red-300 text-center">
                {error}
              </div>
            )}
            
            {/* Form */}
            {!success && (
              <form onSubmit={onSubmit}>
                {/* Name Input */}
                <div className="mb-5">
                  <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="name">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={onChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                
                {/* Email Input */}
                <div className="mb-5">
                  <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="email">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                
                {/* Password Input */}
                <div className="mb-5">
                  <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="password">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
                    Must be at least 6 characters
                  </div>
                </div>
                
                {/* Confirm Password Input */}
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="confirmPassword">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={onChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
                
                {/* Terms and Conditions */}
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-300">
                      I agree to the <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Service</a> and <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
                    </label>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </span>
                  ) : 'Create Account'}
                </button>
              </form>
            )}
            
            {/* Login Link */}
            <div className="mt-6 text-center text-gray-400 text-sm">
              <p>Already have an account? <Link to="/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">Sign in</Link></p>
            </div>
            
            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
              <p>© 2023 Admin Portal. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;