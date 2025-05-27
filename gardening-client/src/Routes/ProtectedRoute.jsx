import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  if (user) {
    return children
  }
  return <Navigate to={'/auth/login'}></Navigate>
}

export default ProtectedRoute
