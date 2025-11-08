import React, { useEffect } from 'react'
import { useUser } from '../context/user.context';
import { useNavigate } from 'react-router-dom';

const Protected = ({children}) => {
    const {user} = useUser();

    const navigate = useNavigate();

    useEffect(()=>{
        if (!user.loggedin){
            navigate('/auth/login')
        }
    }, [])

    return (
    <div>
        {children}
    </div>
  )
}

export default Protected