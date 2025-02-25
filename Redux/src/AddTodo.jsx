import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {addTodo} from './features/todo/todoSlice'

function AddTodo(){

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return(
    <form onSubmit={addTodoHandler}>
    <div className="text-center pt-10">
        <h1 className="text-2xl  font-semibold font-sans text-white">Add Todo</h1>
        <div className="flex justify-center gap-3 pt-5">
        <input 
        className="border-none bg-sky-100 rounded-lg w-190 text-left pl-10  h-10 hover:bg-sky-300 "
        type="text" 
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
         />
         <button
         
         className="border-none bg-sky-100  h-10 rounded-lg w-20 hover:cursor-pointer hover:bg-sky-300 active:bg-sky-200 "
          type="submit"> 
          Submit
          </button>

          </div>
    </div>
    </form>
    )
}

export default AddTodo