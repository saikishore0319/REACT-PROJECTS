import { useState } from 'react'
import AddTodo from './AddTodo'
import './App.css'
import Todo from './Todo'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <Provider store={store} >
      <div>
      <div className='bg-gray-800 min-h-screen '>
        <div className=''>
          <Todo/>
        </div>
      </div>
      </div>
      </Provider>
    </>
  )
}

export default App
