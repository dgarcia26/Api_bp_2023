import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PeticionApi_yugiho from './components/PeticionApi_yugiho.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PeticionApi_yugiho />
    <Footer />
  </React.StrictMode>,
)
