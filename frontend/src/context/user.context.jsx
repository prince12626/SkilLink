import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const [user, setUser] = useState({loggedin:false})

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }


    useEffect(()=>{

    })

  return (
    <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
  )
}

export default UserProvider

export const useUser = ()=>{
  return useContext(UserContext);
}