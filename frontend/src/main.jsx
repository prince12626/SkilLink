import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import ServiceProvider from './context/ServiceContext.jsx'
import UserProvider from './context/user.context.jsx'


createRoot(document.getElementById('root')).render(
  <UserProvider>
    <ServiceProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ServiceProvider>
  </UserProvider>
)
