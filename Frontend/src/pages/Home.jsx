import React from 'react'
import Navbar from '../component/Navbar'


const Home = () => {
  return (
    <div>
      <Navbar />

      <div className=' min-h-[calc(100vh-120px)] flex items-center justify-center font-medium '>
        Welcome Back {localStorage.getItem('username')}!
      </div>
    </div>
  )
}

export default Home