import React from 'react'

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
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-[#33394C]'>
        <div className='p-8 bg-black/30 border border-[#59688f] rounded-2xl'>
            <form className='gap-3 flex flex-col'>
                <input className='outline-none border border-[#59688f] w-96 py-2 px-4 rounded-full ' type="text" placeholder='Full Name...' />
                <input className='outline-none border border-[#59688f] w-96 py-2 px-4 rounded-full ' type="number" placeholder='Phone No...' />
                <input className='outline-none border border-[#59688f] w-96 py-2 px-4 rounded-full ' type="password" placeholder='Password...'/>
                <button>Register Now</button>
            </form>
        </div>
    </div>
  )
}

export default Signup