import React, { createContext, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



export const AuthContect = createContext();

const AuthContectProvider = ({ children }) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const navigate = useNavigate()

    const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setToken('')
    navigate('/login')
}


    const value = {
        backendUrl, setToken,
        token, navigate, logout
    }

    return (
        <AuthContect.Provider value={value}>
            {children}
        </AuthContect.Provider>
    )

}

export default AuthContectProvider;