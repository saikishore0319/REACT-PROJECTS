import { useState } from 'react'
import AddTodo from './AddTodo'
import './App.css'
import Todo from './Todo'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <div className='bg-gray-800 h-screen'>
        <div className=''>
          <AddTodo />
        </div>
        <div className='pt-10 '>
          <Todo/>
        </div>
      </div>
      </Provider>
    </>
  )
}

export default App
