import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPages from './authPages/LoginPages'
import RegisterPage from './authPages/RegisterPage'
import { ToastContainer, toast } from 'react-toastify'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contect from './pages/Contect'
import PrivateRoute from './component/PrivateRoute'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-linear-to-br from-slate-50 via-white to-slate-50'>
      <ToastContainer />

      <Routes>
        <Route path='/login' element={<LoginPages />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route element={<PrivateRoute />}>

          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contect' element={<Contect />} />

        </Route>

      </Routes>
    </div>
  )
}

export default App