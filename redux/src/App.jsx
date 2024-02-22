import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <AddTodo/>
 <todos/>
    </>
  )
}

export default App
