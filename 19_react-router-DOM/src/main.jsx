import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  // tho ager humey browser router perform karna hai tho apne pure application ko browser router sae wrap kardoo
  <BrowserRouter>
    <App />
  </BrowserRouter>


    
)
