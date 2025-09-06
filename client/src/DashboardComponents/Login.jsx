import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { email, password, remember } = formData;

  const onChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const success = await login(email, password);
    setLoading(false);

    if (success) {
      if (remember) localStorage.setItem("rememberEmail", email);
      navigate("/dashboard"); // redirect immediately after login
    } else {
      setErrorMessage("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md border border-white border-opacity-20 overflow-hidden">
        <div className="p-1 bg-gradient-to-r from-blue-400 to-purple-500">
          <div className="bg-gray-900 p-10 rounded-2xl">
            <h1 className="text-4xl font-bold text-white text-center mb-2 animate-pulse">
              Admin Portal
            </h1>
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
                  type={showPassword ? "text" : "password"}
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
                  <input
                    type="checkbox"
                    name="remember"
                    checked={remember}
                    onChange={onChange}
                    className="accent-purple-500"
                  />
                  Remember Me
                </label>
                <a href="#" className="hover:text-white transition-colors">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                )}
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-gray-400 text-center mt-6 text-sm">
              Don't have an account?{" "}
              <a href="/register" className="text-purple-400 hover:text-purple-200">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
