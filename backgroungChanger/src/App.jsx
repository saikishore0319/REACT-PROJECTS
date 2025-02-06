import { useState } from "react"

function App() {
const [colour, setColour] = useState("olive")
  return (
    <div className="w-full h-screen "
    style={{backgroundColor : colour}}
    >
      <div className="  flex flex-wrap justify-center bottom-12 px-5 fixed inset-x-0 px-2  ">
        <div className="bg-white py-2 px-5 rounded-4xl flex flex-wrap justify-center gap-5 shadow-lg" >
          <button onClick={() =>setColour("red")}
           style={{backgroundColor :"red" }} className=" px-5 py-2 rounded-4xl text-white font-bold text-lg drop-shadow-xl hover:cursor-pointer  ">
              Red
          </button>
          <button onClick={() =>setColour("blue")}
           style={{backgroundColor :"blue" }} className=" px-5 py-2 rounded-4xl text-white font-bold text-lg drop-shadow-xl hover:cursor-pointer ">
              Blue
          </button>
          <button onClick={() =>setColour("green")}
          style={{backgroundColor :"green" }} className=" px-5 py-2 rounded-4xl text-white font-bold text-lg drop-shadow-xl hover:cursor-pointer ">
              Green
          </button>
          <button  onClick={() =>setColour("yellow")}
          style={{backgroundColor :"yellow" }} className=" px-5 py-2 rounded-4xl text-black font-bold text-lg drop-shadow-xl hover:cursor-pointer ">
              Yellow
          </button>
          <button onClick={() =>setColour("black")}
          style={{backgroundColor :"black" }} className=" px-5 py-2 rounded-4xl text-white font-bold text-lg drop-shadow-xl hover:cursor-pointer ">
              Black
          </button>
          <button onClick={() =>setColour("olive")}
          style={{backgroundColor :"olive" }} className=" px-5 py-2 rounded-4xl text-white font-bold text-lg drop-shadow-xl hover:cursor-pointer ">
              Olive
          </button>
          <button onClick={() =>setColour("gray")}
          style={{backgroundColor :"gray" }} className=" px-5 py-2 rounded-4xl text-white font-bold text-lg drop-shadow-xl hover:cursor-pointer ">
              Gray
          </button>
          <button onClick={() =>setColour("pink")}
          style={{backgroundColor :"pink" }} className=" px-5 py-2 rounded-4xl text-black font-bold text-lg drop-shadow-xl hover:cursor-pointer ">
              Pink
          </button>
          <button onClick={() =>setColour("lavender")}
          style={{backgroundColor :"lavender" }} className=" px-5 py-2 rounded-4xl text-black font-bold text-lg drop-shadow-xl hover:cursor-pointer ">
              Lavender
          </button>
          <button onClick={() =>setColour("white")}
          style={{backgroundColor :"white" }} className=" px-5 py-2 rounded-4xl text-black font-bold text-lg drop-shadow-xl hover:cursor-pointer ">
              White
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
