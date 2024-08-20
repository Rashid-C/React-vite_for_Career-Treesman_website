import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from '../pages/Home'

export default function LayoutRoutes() {
  return (
    <BrowserRouter>
        <Header/>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
