import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from "./hooks/useCurrencyinfo"



function App() {
 const [amount, setAmount] = useState(0)
 const [from, setFrom] = useState("usd") 
 const [to, setTo] = useState("inr") 
 const [convertedAmount, setConvertedAmount] = useState(0)


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
               <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 '>
                  <form onSubmit={(e) =>{
                     e.preventDefault();
                     convert();
                  }}
                  >
                     <div className='w-full mb-1' >
                     <InputBox
                        label="from"
                        amount={amount}
                        currrencyOption={options}
                        onCurrencyChange={(currency)=> { setFrom(currency)}}
                        onAmountChange={(amount) => {setAmount(amount)}}
                        selectCurrency= {from} 
                        /> 
                     </div>
                     <div className=' w-full h-10 flex justify-center items-center'>
                        <button 
                        type='button'
                        className='  border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                        onClick={swap}
                        >
                              swap
                        </button>
                     </div>
                     <div className='w-full mt-1 mb-4' >
                     <InputBox
                        label="to"
                        amount={convertedAmount}
                        currrencyOption={options}
                        onCurrencyChange={(currency)=> {setTo(currency) }}
                        selectCurrency= {from} 
                        amountDisabled
                        /> 
                     </div>
                     <button
                      type='submit'
                      className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg '
                      onClick={convert}
                     >
                        convert
                     </button>
                  </form>

               </div>

            </div>
     </div>
  );
}

export default App
