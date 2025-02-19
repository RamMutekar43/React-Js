import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*?~/"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  //useRef hook
  let passRef = useRef(null)

  const copyPassword = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
    
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      type="text" 
      placeholder="Password"
      value={password}
      readOnly
      ref={passRef}
      className="outline-none w-full py-1 px-3"
      />
      <button
      onClick={
        copyPassword
      }
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >
        copy
      </button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}} 
        />
        <label htmlFor="lenghtInput">Length : {length}</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        id="numberInput"
        onChange={()=>{setNumberAllowed((prev)=>!prev);
        }}
        />
        <label htmlFor="numberInput">Number</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input type="checkbox" 
        id="characterInput"
        onChange={()=>{setCharAllowed((prev)=>!prev);
        }}
        />
        <label htmlFor="characterInput">Character</label>
      </div>
    </div>
   </div>
  )
}

export default App
