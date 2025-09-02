import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'


import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <App />
    <Footer/>
    
    </BrowserRouter>
  </StrictMode>
)
