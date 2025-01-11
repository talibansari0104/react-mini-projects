import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")

  const passwordRef = useRef(null)


  const passwordGenrator = useCallback(()=>{
    let pass = ""
    let str = "qwertyuiopasdfghjklmnbvcxzASDFGHJKLPOIUYTREWQZXCBNM"
    if(numAllowed){
      str += "1234567890"


    }
    if (charAllowed) {
      str += '!@#$%^&*()_-+=~<>?/'
      
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
      
      
    }
    setPassword(pass)


  },[length, charAllowed, numAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password)
  }, [password])



  useEffect(()=>{
    passwordGenrator()
  },[length, charAllowed, numAllowed, passwordGenrator])


  return (
    <div className='w-full mx-auto max-w-md shadow-md rounded-lg px-4 py-3 bg-gray-700 text-orange-500'>
      <h1 className='text-white text-center my-4 text-lg'>Password Genrator</h1>
      <div className='overflow-hidden mb-4'>
        <input 
        type='text'
        className='outline-none px-3 py-2 rounded-md'
        placeholder='password'
        value={password}
        readOnly
        ref={passwordRef}
  
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='mx-3 bg-white px-3 py-2 rounded-lg'>Copy</button>
      </div>
      <div>
        <input
        type='range'
        min={8}
        max={100}
        value={length}
        onChange={(e)=>setLength(e.target.value)}
        className='cursor-pointer'


        />
        <label className='mx-3'>Length:{length}</label>

      </div>
      <div>
        <input 
        defaultChecked={numAllowed}
        id='number'
        onChange={()=>setNumAllowed((prev)=>!prev)}
        type="checkbox" />
        <label  className='mx-3' htmlFor="number">Number</label>
      </div>
      <div>
        <input 
        defaultChecked={charAllowed}
        id='chractor'
        onChange={()=>setCharAllowed((prev)=>!prev)}
        type="checkbox" />
        <label className='mx-3' htmlFor="chractor">Charector</label>
      </div>

      

    </div>
    
    
  )
}

export default App
