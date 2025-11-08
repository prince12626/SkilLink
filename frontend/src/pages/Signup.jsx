import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import uri from '../data/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Signup = () => {
  const navigate = useNavigate()

  const [role, setRole] = useState('user') // 'user' or 'freelancer'
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    password: '',
    city: '',
    district: '',
    pinCode: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const endpoint =
        role === 'user'
          ? `${uri}/auth/user/register`
          : `${uri}/auth/freelancer/register`

      const payload =
        role === 'user'
          ? {
              fullName: formData.fullName,
              phone: formData.phone,
              password: formData.password
            }
          : {
              fullName: formData.fullName,
              phone: formData.phone,
              password: formData.password,
              city: formData.city,
              district: formData.district,
              pinCode: formData.pinCode
            }

      const res = await axios.post(endpoint, payload, {
        headers: { 'Content-Type': 'application/json' }
      })

      const data = res.data

      if (data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('role', role)
      }

      toast.success(`Registered successfully as ${role}!`, {
        position: 'top-right',
        autoClose: 2500
      })

      setTimeout(() => {
        navigate('/auth/login')
      }, 2500)
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message || 'Registration failed', {
          position: 'top-right'
        })
      } else if (err.request) {
        toast.error('Server not responding. Try again later.', {
          position: 'top-right'
        })
      } else {
        toast.error('Unexpected error occurred.', {
          position: 'top-right'
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=' h-screen w-screen flex flex-col items-center justify-center text-white px-4'>
      <ToastContainer />
      <div className='p-8 bg-black border border-[#59688f] rounded-2xl w-full max-w-md z-[99]'>
        <h1 className='text-3xl text-center mb-4'>Create an Account</h1>

        {/* ===== Role Selector ===== */}
        <div className='flex justify-center gap-3 mb-6'>
          <button
            type='button'
            onClick={() => setRole('user')}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              role === 'user'
                ? 'bg-blue-800 border-blue-700 text-white'
                : 'border-gray-500 text-gray-300'
            }`}
          >
            User
          </button>

          <button
            type='button'
            onClick={() => setRole('freelancer')}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              role === 'freelancer'
                ? 'bg-blue-800 border-blue-700 text-white'
                : 'border-gray-500 text-gray-300'
            }`}
          >
            Freelancer
          </button>
        </div>

        {/* ===== Signup Form ===== */}
        <form onSubmit={handleSubmit} className='gap-3 flex flex-col'>
          <input
            className='outline-none border border-[#59688f] w-full py-2 px-4 rounded-full bg-transparent text-white'
            type='text'
            name='fullName'
            placeholder='Full Name...'
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            className='outline-none border border-[#59688f] w-full py-2 px-4 rounded-full bg-transparent text-white'
            type='text'
            name='phone'
            placeholder='Phone No...'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className='outline-none border border-[#59688f] w-full py-2 px-4 rounded-full bg-transparent text-white'
            type='password'
            name='password'
            placeholder='Password...'
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* ===== Extra fields for freelancers ===== */}
          {role === 'freelancer' && (
            <>
              <input
                className='outline-none border border-[#59688f] w-full py-2 px-4 rounded-full bg-transparent text-white'
                type='text'
                name='city'
                placeholder='City...'
                value={formData.city}
                onChange={handleChange}
                required
              />
              <input
                className='outline-none border border-[#59688f] w-full py-2 px-4 rounded-full bg-transparent text-white'
                type='text'
                name='district'
                placeholder='District...'
                value={formData.district}
                onChange={handleChange}
                required
              />
              <input
                className='outline-none border border-[#59688f] w-full py-2 px-4 rounded-full bg-transparent text-white'
                type='text'
                name='pinCode'
                placeholder='Pin Code...'
                value={formData.pinCode}
                onChange={handleChange}
                required
              />
            </>
          )}

          <button
            type='submit'
            disabled={loading}
            className={`bg-blue-900 py-2 px-4 rounded-full text-white mt-3 hover:bg-blue-800 transition ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Registering...' : `Register as ${role}`}
          </button>

          <p className='text-sm text-gray-300 text-center mt-3'>
            Already have an account?{' '}
            <Link to='/auth/login' className='text-blue-400 underline'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
