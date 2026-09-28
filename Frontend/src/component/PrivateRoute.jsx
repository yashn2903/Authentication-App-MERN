import React, { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { AuthContect } from "../context/AuthContext"

const PrivateRoute = () => {
    const { token } = useContext(AuthContect)
    const location = useLocation()

    if (!token) {
        return <Navigate to='/login' replace state={{ from: location }} />
    }

    return <Outlet />
}

export default PrivateRoute