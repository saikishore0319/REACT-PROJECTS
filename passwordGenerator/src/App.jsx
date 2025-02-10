import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [lenght, setlength] = useState(8)
  const [NumbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed , setCharactersAllowed] = useState(false)
  const [Password , SetPassword] = useState("")
  const passwordRef = useRef(null)
  const passWordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"
    if(NumbersAllowed) str+= "0123456789"
    if(charactersAllowed) str+= "!@#$*"

    for(let i = 1; i<=lenght; i++)
    {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }
    SetPassword(pass)
  }
  ,[lenght,NumbersAllowed,charactersAllowed, SetPassword])
  const copyPassowrdToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])
  useEffect(()=>{ passWordGenerator()},[lenght,charactersAllowed,NumbersAllowed,passWordGenerator])
  return (
    <>
      <div className='bg-gray-600 my-20 mx-auto h-50 w-120 rounded-4xl flex flex-col items-center'>
            <h1 className='font-sans text-2xl font-bold text-white mt-5'>Password generator</h1>
          <div className='flex  justify-center items-center'>
            <input  
            ref={passwordRef}
            className='bg-white  mt-4 w-100 h-10 rounded-xl text-left text-2xl outline-none px-3 py-1 '
            readOnly
            placeholder='Password'
            value={Password}
             type="text" />

             <button onClick={copyPassowrdToClipboard} className=' bg-amber-500 py-2 px-2 mt-4 rounded-xl text-white font-bold shrink-0 outline-none hover:cursor-pointer hover:bg-white hover:text-black'>copy</button>
          </div >
          <div className='flex mt-5 gap-2'>
          <div className=''>
            <div className='text-white font-bold mr-2 '>
              <input type="range" className='hover:cursor-pointer' min={8} max={100} value={lenght} onChange={(e) => {setlength(e.target.value)}}/>
              <label htmlFor="">lenght {lenght}</label>
            </div>
          </div>
          <div className='text-white text-bold '>
            <input type="checkbox" name="NumbersAllowed" id="" value={NumbersAllowed} onChange={() => {setNumbersAllowed((prev)=> !(prev))}} />
            <label htmlFor="NumbersAllowed">Numbers</label>
          </div>
          <div className='text-white text-bold '>
            <input type="checkbox" name="charsAllowed" id="" value={charactersAllowed} onChange={() => {setCharactersAllowed((prev)=> !(prev))}} />
            <label htmlFor="CharsAllowed">Special characters</label>
          </div>
          </div>
      </div>
      
    </>
  )
}

export default App
