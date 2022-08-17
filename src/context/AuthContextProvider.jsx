import React from 'react'
import {useContext , createContext} from 'react'

// ? context olusturmayı createContext ile yapıyoruz. 
const AuthContext = createContext()


//* CUSTOM HOOK FOR AUTH CONTEXT
const useAuth = () => {
    return useContext(AuthContext)
}


const AuthContextProvider = () => {
  return (
    <div>AuthContextProvider</div>
  )
}

export default AuthContextProvider