import { useContext, createContext } from "react";                          


export const TodoContext = createContext({
    todos :[
        {
        id : 1,
        todo : "todoMsg",
        isCompleted : false,
        }
    ],
    addTodo : (todo)=>{},
    deleteTodo : (id)=>{},
    updateTodo : (todo, id)=>{},
    toggleCompleted : (id)=>{},
    
})

export const Todoprovider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}