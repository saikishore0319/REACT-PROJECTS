import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-4xl pt-5 font-mono font-bold text-white items-center pb-3'>Password Generator</h1>

    </>
  )
}

export default App
