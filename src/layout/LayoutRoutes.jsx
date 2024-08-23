import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Course from '../pages/Course'
import Placements from '../pages/Placements'
import Contact from '../pages/Contact'
import Careers from '../pages/Careers'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default function LayoutRoutes() {
  return (
    <BrowserRouter>
        <Header/>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/courses' element={<Course/>}/>
            <Route path='/placements' element={<Placements/>}/>
            <Route path='/careers' element={<Careers/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            <Route path='/*' element={<Home/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
