
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode , setThemeMode] = useState("light")
  const darkTheme =() =>
  {
    setThemeMode("dark")
  }
  const lightTheme =() =>
  {
    setThemeMode("light")
  }

  useEffect(()=>{
    const doc = document.querySelector("html")
    doc.classList.remove("dark", "light")
    doc.classList.add(themeMode)
  },[themeMode])

  return (
    <div className='bg-neutral-700'>
    <ThemeProvider value={{themeMode , darkTheme , lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeButton />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
    </div>

  )
}

export default App
