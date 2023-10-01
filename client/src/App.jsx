import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/about'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute'


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/about' element={<About/>}/>
    <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
    </Route>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
  )
}
