import './App.css'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => { setLoading(false) })
  }, [])


  return (
    <>
      <Header />
      <main>
        A blog app with appwrite
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}

export default App
