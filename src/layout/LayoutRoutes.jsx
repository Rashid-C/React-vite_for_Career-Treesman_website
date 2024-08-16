import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function LayoutRoutes() {
  return (
    <BrowserRouter>
        <Header/>
        <Nav/>
        <Routes>
            {/* <Route/> */}
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
