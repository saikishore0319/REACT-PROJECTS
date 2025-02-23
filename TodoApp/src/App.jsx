import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './contexts'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev)=>{
     return [{id:Date.now(),...todo},...prev]
    })
  }

  const updateTodo =(id, todo) =>{
    setTodos((prev)=>{
       return prev.map((prevTodo) => {
        return (prevTodo.id === id? todo: prevTodo)
      })
    })
  }

  const deleteTodo = (id) =>{
    setTodos((prev)=>{
    return  prev.filter((prevTodo) => {
        return prevTodo.id !== id
      })
    })
  }

  const toggleCompleted = (id)=>{
    setTodos((prev)=>{
     return prev.map((prevTodo)=>{
      return  prevTodo.id === id ? {...prevTodo, isCompleted : !prevTodo.isCompleted} : prevTodo
      })
    })
  }

  useEffect(()=>{
    const todos =JSON.parse(localStorage.getItem('todos')) 
    if(todos)
    {
      setTodos(todos) 
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <Todoprovider value={{todos, addTodo, deleteTodo, toggleCompleted, updateTodo}}>
      <div className='h-screen w-full text-center bg-gray-600 items-center flex justify-center text-5xl text-white'>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */}
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
            </div>
          </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
