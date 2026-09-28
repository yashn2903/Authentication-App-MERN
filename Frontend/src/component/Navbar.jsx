import React, { useContext, useEffect } from 'react'
import { Wheat, Search, ShoppingCart, User } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContect } from '../context/AuthContext'

const Navbar = () => {

    const { backendUrl, token, setToken, navigate, logout } = useContext(AuthContect)

    const hendleLogout = () => {
        logout()
        toast.success('User logged-Out')
    }

    return (
        <div className=' flex items-center justify-between py-5 font-medium'>

            {/* LOGO */}
            <Link to='/'>
                <div className=' inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/25 '>
                    <Wheat className=' w-6 h-6 text-white' strokeWidth={2} />
                </div>
            </Link>

            {/* navigations */}
            <div className=' flex gap-5 text-sm text-gray-700'>

                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>CONTECT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contect' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

            </div>

            {/* side icons */}
            <div className='flex items-center gap-6'>
                <Search />
                <ShoppingCart />
                <User onClick={hendleLogout} />
            </div>

        </div>
    )
}

export default Navbar