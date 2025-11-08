import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { Signup } from './pages/Signup'
import { useServices } from './context/ServiceContext'
import Service from './pages/Service'

export const App = () => {
  return (
    <div className='bg-[#151A28] relative h-auto w-screen'>
      <Navbar />
      <Routes>
        <Route path='/auth/login' element={<Login />} />
        <Route path="/auth/register" element={<Signup />} />
        <Route path='/services' element={<Service />} />
      </Routes>
    </div>
  )
}

export default App