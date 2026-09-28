import React, { useContext, useEffect, useState } from 'react'
import { BrainCircuit, Mail, Lock, ArrowRight, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AuthContect } from '../context/AuthContext'
import axios from 'axios'
import { toast } from 'react-toastify'



const RegisterPage = () => {

  const { backendUrl, token, setToken, navigate } = useContext(AuthContect)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [focusedField, setFocusedField] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
      console.log(response);

      if (response.data.success) {
        // console.log(response.data.userdata.token);
        setToken(response.data.userdata.token)
        localStorage.setItem('token', response.data.userdata.token)
        localStorage.setItem('username', response.data.userdata.user.username)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])


  return (
    <div className=' flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50'>

      <div className=' relative w-full max-w-md px-6'>
        <div className='bg-white/80 backdrop-blur-xl border border-slate-200/60
          rounded-3xl shadow-xl shadow-slate-200/50 p-10'>

          {/* hearder */}
          <div className=' text-center mb-10'>
            <div className=' inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/25 mb-6'>
              <BrainCircuit className=' w-7 h-7 text-white' strokeWidth={2} />
            </div>
            <h1 className='text-2xl font-medium text-slate-900 tracking-tight mb-2'>
              Create an account
            </h1>
            <p className=' text-slate-500 text-sm'>
              Welcome! Let's Get You Started
            </p>
          </div>

          {/* form */}
          <div className=' space-y-5'>
            {/* Username field */}
            <div className=' space-y-2'>
              <label className=' block text-xs font-semibold text-slate-700 uppercase tracking-wide'>
                Username
              </label>
              <div className=' relative group'>
                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${focusedField === "username"
                  ? "text-emerald-500"
                  : "text-slate-400"
                  }`}>
                  <User className=' h-5 w-5' />
                </div>
                <input
                  type="text"
                  onChange={(e) => { setName(e.target.value) }}
                  value={name}
                  onFocus={() => setFocusedField("username")}
                  onBlur={() => setFocusedField(null)}
                  className=' w-full h-12 pl-12 pr-4 border-2 border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10'
                  placeholder='yourusername'
                />
              </div>
            </div>

            {/* Email field */}
            <div className=' space-y-2'>
              <label className=' block text-xs font-semibold text-slate-700 uppercase tracking-wide' >
                Email
              </label>
              <div className=' relative group'>
                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${focusedField === "email"
                  ? "text-emerald-500"
                  : "text-slate-400"
                  }`}>
                  <Mail className=' h-5 w-5' strokeWidth={2} />
                </div>
                <input
                  type="email"
                  onChange={(e) => { setEmail(e.target.value) }}
                  value={email}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className=' w-full h-12 pl-12 pr-4 border-2 border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10'
                  placeholder='you@example.com'
                />
              </div>
            </div>

            {/* password field */}
            <div className=' space-y-2'>
              <label className=' block text-xs font-semibold text-slate-700 uppercase tracking-wide' >
                Password
              </label>
              <div className=' relative group'>
                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${focusedField === "password"
                  ? "text-emerald-500"
                  : "text-slate-400"
                  }`}>
                  <Lock className=' h-5 w-5' strokeWidth={2} />
                </div>
                <input
                  type="text"
                  onChange={(e) => { setPassword(e.target.value) }}
                  value={password}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  className=' w-full h-12 pl-12 pr-4 border-2 border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10'
                  placeholder='••••••••'
                />
              </div>
            </div>

            {/* Error Message */}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="group relative w-full h-12 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-600 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 shadow-lg shadow-emerald-500/25 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <>
                  Create account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    strokeWidth={2.5} />
                </>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -transxfa group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200/60">
            <p className="text-center text-sm text-slate-600">
              Already have an account? {''}
              <Link to="/login" className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-200">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Subtle footer text */}
        <p className="text-center text-xs text-slate-400 mt-6">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default RegisterPage 