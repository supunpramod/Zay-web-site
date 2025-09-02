
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";




function App() {
  return (
   
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        
        
        
      </Routes>
      

  );
}

export default App;
