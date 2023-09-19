import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
    <p>Phonebook {count}</p>
    <button onClick={() => setCount((count) => count + 1)}></button>
    </>
  )
}

export default App
