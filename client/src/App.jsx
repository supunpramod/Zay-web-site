// import React from 'react';
// import { Routes, Route, Outlet } from 'react-router-dom';
// import { AuthProvider } from './DashboardComponents/AuthContext';
// import Login from './DashboardComponents/Login';
// import Register from './DashboardComponents/Register.jsx';

// // Public Components
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Shop from './Components/Shop';
// import Footer from './Components/Footer.jsx';
// import Header from './Components/Header.jsx';

// // Dashboard Components
// import Contactshow from './DashboardComponents/Contactshow';
// import Dashboard from './DashboardComponents/Dashboard';
// import Navbar from './DashboardComponents/Navbar';
// import Sidebar from './DashboardComponents/Sidebar.jsx';

// // Landing Layout (Header + Footer)
// const LandingLayout = () => (
//   <>
//     <Header />
//     <Outlet /> {/* Public pages */}
//     <Footer />
//   </>
// );

// // Dashboard Layout (Navbar + Sidebar)
// const DashboardLayout = () => (
//   <div className="flex h-screen">
//     {/* Sidebar */}
//     <Sidebar />

//     {/* Main content */}
//     <div className="flex-1 flex flex-col">
//       <Navbar />
//       <div className="flex-1 overflow-auto p-5">
//         <Outlet /> {/* Dashboard pages */}
//       </div>
//     </div>
//   </div>
// );


// function App() {
//   return (
//     <AuthProvider>
//       <Routes>
//         {/* Public routes */}
//         <Route element={<LandingLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/shop" element={<Shop />} />
//         </Route>

//         {/* Dashboard routes with layout */}
//         <Route element={<DashboardLayout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/contactshow" element={<Contactshow />} />
//         </Route>

//         {/* Login page (no layout) */}
//         <Route path="/login" element={<Login />} />
        
//         <Route path="/register" element={<Register />} />

//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;




import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './DashboardComponents/AuthContext';
import ProtectedRoute from './DashboardComponents/ProtectedRoute';
import Login from './DashboardComponents/Login';
import Register from './DashboardComponents/Register.jsx';

// Public Components
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Shop from './Components/Shop';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';

// Protected Components
import Contactshow from './DashboardComponents/Contactshow';
import Shopmanage from './DashboardComponents/Shopmanage.jsx';
import Dashboard from './DashboardComponents/Dashboard';
import Navbar from './DashboardComponents/Navbar';
import Sidebar from './DashboardComponents/Sidebar'; //sidebar

// Landing Layout (Header + Footer)
const LandingLayout = () => (
  <>
    <Header />
    <Outlet /> {/* Public pages */}
    <Footer />
  </>
);

// Dashboard Layout (Navbar + Sidebar)
const DashboardLayout = () => (
  <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar />

    {/* Main content */}
    <div className="flex-1 flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-auto p-5">
        <Outlet /> {/* Dashboard pages */}
      </div>
    </div>
  </div>
);


function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Route>

        {/* Protected routes with Dashboard layout */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contactshow" element={<Contactshow />} />
          <Route path="/shopmanage" element={<Shopmanage />} />
        </Route>

        {/* Login page (no layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </AuthProvider>
  );
}

export default App;     
