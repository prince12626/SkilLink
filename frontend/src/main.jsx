import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import ServiceProvider from './context/ServiceContext.jsx'


createRoot(document.getElementById('root')).render(
  <ServiceProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ServiceProvider>
)
