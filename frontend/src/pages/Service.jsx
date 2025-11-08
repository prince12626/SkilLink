import React, { useEffect } from 'react'
import {useServices} from "../context/ServiceContext"

const Service = () => {
    const {services} = useServices();

    useEffect(()=>{console.log(services)}, [services])

  return (
    <div className='h-screen w-screen max-w-[90%] mx-auto flex'>
        <div className="mt-30">
                <h1 className='text-4xl'>Our Services for your Comfort.</h1> 
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpaceat facilis</p>
                <div>
                    {}
                </div>
        </div>
    </div>
  )
}

export default Service