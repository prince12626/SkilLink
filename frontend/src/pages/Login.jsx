import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import uri from '../data/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState('user') // 'user' or 'freelancer'

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
      // ✅ Dynamically choose endpoint based on role
      const endpoint =
        role === 'user'
          ? `${uri}/auth/user/login`
          : `${uri}/auth/freelancer/login`

      const res = await axios.post(endpoint, formData, {
        headers: { 'Content-Type': 'application/json' }
      })

      const data = res.data

      // ✅ Save token + role in localStorage
      if (data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('role', role)
      }

      // ✅ Show success toast
      toast.success(`Logged in successfully as ${role}!`, {
        position: 'top-right',
        autoClose: 2500
      })

      // Redirect after a short delay
      setTimeout(() => {
        navigate(role === 'user' ? '/user/dashboard' : '/freelancer/dashboard')
      }, 2500)
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message || 'Invalid credentials', {
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
    <div className='w-full h-screen flex items-center justify-center px-4'>
      <div className="bg-[#151A28] shadow-2xl border border-[#33394C] rounded-2xl p-8 sm:p-12 w-full max-w-md">
        <ToastContainer />
        <div>
          <h1 className='text-3xl'>Welcome back 👋</h1>
          <p className='text-sm text-gray-400 mt-2'>Nice to see you again!</p>
        </div>

        {/* ===== Role Toggle Buttons ===== */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={() => setRole('user')}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              role === 'user'
                ? 'bg-blue-800 border-blue-700 text-white'
                : 'border-gray-600 text-gray-400'
            }`}
          >
            User Login
          </button>

          <button
            type="button"
            onClick={() => setRole('freelancer')}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              role === 'freelancer'
                ? 'bg-blue-800 border-blue-700 text-white'
                : 'border-gray-600 text-gray-400'
            }`}
          >
            Freelancer Login
          </button>
        </div>

        {/* ===== Login Form ===== */}
        <form onSubmit={handleSubmit} className='flex mt-8 flex-col gap-3 w-full'>
          <input
            className='py-2 px-3 outline-none border border-[#33394C] rounded-full w-full bg-transparent text-white'
            type="text"
            name="phone"
            id="phone"
            placeholder='Phone No.'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className='py-2 px-3 outline-none border border-[#33394C] rounded-full w-full bg-transparent text-white'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type='submit'
            disabled={loading}
            className={`bg-blue-950 cursor-pointer py-2 px-3 rounded-full w-full sm:w-auto hover:bg-blue-900 transition ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Logging in...' : `Login as ${role}`}
          </button>

          <p className='text-sm text-gray-500 text-center sm:text-left'>
            New here?{' '}
            <Link className='text-blue-800' to="/auth/register">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
