import { useState } from 'react'
import { Routes, Route, Link } from 'react-router'  
import Home from './Home'
import About from './about'
import Header from './header'
import Footer from './Footer'
import PageNotFound from './PageNotFound'
import ContactUs from './ContactUs'
import './App.css'


function App() {
  

  return (
    <>
    
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='/*' element={<PageNotFound/>} />
      <Route path='/contact' element={<ContactUs/>} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App