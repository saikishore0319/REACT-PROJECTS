import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from "./hooks/useCurrencyinfo"



function App() {
 const [amount, setAmount] = useState()
 const [from, setFrom] = useState("usd") 
 const [to, setTo] = useState("inr") 
 const [convertedAmount, setConvertedAmount] = useState(0)
const fromUpper = (from).toUpperCase()
const toUpper = (to).toUpperCase()

 const CurrencyInfo = useCurrencyInfo(from)
 const options = Object.keys(CurrencyInfo)

 const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
 }

 const convert = () =>{
    setConvertedAmount(amount * CurrencyInfo[to])
 }

  return (
     <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat '
            style= {{ 
               backgroundImage: "url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
            >
            <div className='w-full'>
               <div className='flex justify-center items-center text-white text-2xl font-bold pb-10 '>
                  <h1 className='backdrop-blur-sm bg-white/30  p-5 rounded-2xl border-1 border-black font-sans '>Currency converter</h1>
               </div>
               <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 '>
                  <form onSubmit={(e) =>{
                     e.preventDefault();
                     convert();
                  }}
                  >
                     <div className='w-full mb-1' >
                     <InputBox
                        label="From"
                        amount={amount}
                        currrencyOption={options}
                        onCurrencyChange={(currency)=> { setFrom(currency)}}
                        onAmountChange={(amount) => {setAmount(amount)}}
                        selectCurrency= {from} 
                        /> 
                     </div>
                     <div className=' w-full h-1.5 flex justify-center items-center'>
                        <button 
                        type='button'
                        className='  border-white rounded-md bg-pink-800 hover:bg-pink-700  active:bg-white active:text-black active:border-1 active:border-black hover:cursor-pointer   text-white px-2 py-0.5 h-10 w-20'
                        onClick={swap}
                        >
                              swap
                        </button>
                     </div>
                     <div className='w-full mt-1 mb-4' >
                     <InputBox
                        label="To"
                        amount={convertedAmount}
                        currrencyOption={options}
                        onCurrencyChange={(currency)=> {setTo(currency) }}
                        selectCurrency= {to} 
                        amountDisabled
                        /> 
                     </div>
                     <button
                      type='submit'
                      className=' w-full bg-pink-800 hover:bg-pink-700 hover:text-white hover:cursor-pointer shadow-lg text-white px-4 py-3 rounded-lg active:bg-white active:text-black active:cursor-pointer active:shadow-non active:border-1 active:border-black'
                     >
                        convert {fromUpper} to {toUpper}
                     </button>
                  </form>

               </div>

            </div>
     </div>
  );
}

export default App
