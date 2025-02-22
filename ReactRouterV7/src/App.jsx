import { useState } from 'react'
import { Routes, Route, Link } from 'react-router'  
import Home from './Home'
import About from './about'
import Header from './header'
import Footer from './Footer'
import PageNotFound from './PageNotFound'
import ContactUs from './ContactUs'
import Services from './Services'
import Service1 from './Service1'
import Service2 from './Service2'
import Service3 from './Service3'
import './App.css'


function App() {
  

  return (
    <>
    
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/services' element={<Services/>}>
          <Route path='service1' element={<Service1/>}/>
          <Route path='service2' element={<Service2/>}/>
          <Route path='service3' element={<Service3/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Route>
      
      <Route path='/*' element={<PageNotFound/>} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App