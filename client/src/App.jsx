import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './DashboardComponents/AuthContext';
import ProtectedRoute from './DashboardComponents/ProtectedRoute';
import Login from './DashboardComponents/Login';

// Public Components
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Shop from './Components/Shop';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';

// Protected Components
import Dashboard from './DashboardComponents/Dashboard';

// Landing Layout (Header + Footer)
const LandingLayout = () => (
  <>
    <Header />
    <Outlet /> {/* Page content render වෙනවා */}
    <Footer />
  </>
);

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Landing Pages with Header + Footer */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Route>

        {/* Login Page (no Header/Footer) */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard Protected Route (no Header/Footer) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
