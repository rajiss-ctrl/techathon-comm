import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useUserAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { user } = useUserAuth();
  
  
    //  const regU =JSON.parse(sessionStorage.getItem('user'))
     
    //  const authU =JSON.parse(sessionStorage.getItem('authUser'))

    
    // console.log(authU)
    // console.log(regU.email )
    // const regUser= regUserAllData.email
  return user ? <Outlet /> : <Navigate to={'getstarted'}/>
}

export default ProtectedRoute