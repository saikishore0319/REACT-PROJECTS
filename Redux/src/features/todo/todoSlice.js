import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
    todos :[{id : 1, text : "hello world"}],
    edit : null
}



export const todoSlice = createSlice({
    name  : "todos",
    initialState,
    reducers : {
        addTodo : (state , action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        startEditing :(state, action)=>{
            const id = action.payload
            state.edit = state.todos.find((todo)=>(todo.id===id))
        },
        editTodo : (state, action) =>{
            const {id, text} = action.payload
            state.todos = state.todos.map((todo)=>(
                todo.id === id? {...todo,text}: todo
            ))
            state.edit = null
        }
    }
})


export default todoSlice.reducer
export const {addTodo, removeTodo,editTodo,startEditing} = todoSlice.actions