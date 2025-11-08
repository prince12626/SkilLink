import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu } from "lucide-react"

const Navbar = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    return (
            <header className='w-full flex items-center justify-center h-24 absolute z-50'>
                <nav className='shadow-2xl top-0 left-0 border border-[#33394C] max-w-[90%] rounded-full mx-auto bg-[#151A28] px-4 md:px-8 text-white h-16 flex items-center justify-between w-full'>
                    <Link to='/' className='text-2xl font-semibold'>
                       <img src="https://ik.imagekit.io/princedevfolio/remove-photos-background-removed.png?updatedAt=1762614565712" alt="" />
                    </Link>

                    <div className='hidden md:flex items-center gap-5'>
                        <span className='cursor-pointer' onClick={() => { navigate("/services") }}>Find a Service</span>
                        <button onClick={() => { navigate("/auth/login") }} className=' cursor-pointer bg-white/40 rounded py-1 px-3 '>Sign In</button>
                    </div>

                    <div className='md:hidden flex items-center'>
                        <button
                            aria-label='Toggle menu'
                            aria-expanded={open}
                            onClick={() => setOpen(prev => !prev)}
                            className='p-2 rounded-md hover:bg-white/10 focus:outline-none'
                        >
                            <Menu/>
                        </button>
                    </div>

                    {open && (
                        <div className='absolute right-4 top-full mt-3 md:hidden'>
                            <div className='bg-[#151A28] border border-[#33394C] rounded-lg shadow-lg p-4 flex flex-col gap-3 min-w-40'>
                                <button onClick={() => { setOpen(false) }} className='text-left'>Find a Service</button>
                                <button onClick={() => { setOpen(false); navigate('/auth/login') }} className='text-left bg-white/40 rounded py-1 px-3'>Sign In</button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
    )
}

export default Navbar