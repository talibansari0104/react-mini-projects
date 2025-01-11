import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function addCount(){
    setCount(count + 1)
    if (count == 20) {
      setCount(0)
      
    }
  }


  function removeCount(){
    setCount(count - 1)
    if (count == 0) {
      setCount(20)
      
    }
  }

  return (
    <div>
      <button onClick={addCount}>Add count</button>
      <h1>count: {count} </h1>
      <button onClick={removeCount}>Remove count</button>
    </div>
  )
}

export default App
