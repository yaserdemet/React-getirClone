import React from 'react'
import { Outlet } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useConsumeContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'


const PrivateRouter = () => {
    const navigate = useNavigate()
    const { currentUser } = useConsumeContext()
  return (
    <div>
            {
                currentUser ? <Outlet /> : <Navigate to="/login" />
            }
    </div>
  )
}

export default PrivateRouter