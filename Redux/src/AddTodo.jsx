import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, editTodo} from './features/todo/todoSlice'

function AddTodo(){

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const editingTodo = useSelector((state)=> state.edit)

    useEffect(()=>{
        if(editingTodo)
        {
            setInput(editingTodo.text)
        }else{
            setInput('')
        }
    },[editingTodo])
    const addTodoHandler = (e)=>{
        e.preventDefault()
        if(!input.trim()) return
        if(editingTodo)
        {
            dispatch(editTodo({id: editingTodo.id, text:input}))
        }else{
             dispatch(addTodo(input))
        }
        setInput('')
    }

    return(
    <form onSubmit={addTodoHandler}>
    <div className="text-center pt-10">
        <h1 className="text-2xl  font-semibold font-sans text-white">{editingTodo?"Update Todo":"Add Todo"}</h1>
        <div className="flex justify-center gap-3 pt-5">
        <input 
        className="border-none bg-sky-100 rounded-lg md:w-190 text-left pl-10  h-10 hover:bg-sky-300 "
        type="text" 
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
         />
         <button
         
         className="border-none bg-sky-100 w-20 h-10 rounded-lg md:w-20 hover:cursor-pointer hover:bg-sky-300 active:bg-sky-200 "
          type="submit"> 
         {editingTodo?"Update":"Submit"}
          </button>

          </div>
    </div>
    </form>
    )
}

export default AddTodo