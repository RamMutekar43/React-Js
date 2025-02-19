import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-">
          
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded ">
            <button 
            onClick={()=> setColor("red")}
            className=" px-3 py-2 rounded"
            style={{backgroundColor:"red"}}>
              Red
            </button>
            <button 
            onClick={()=> setColor("skyblue")}
            className=" px-3 py-1 rounded"
            style={{backgroundColor:"skyblue"}}>
              Skyblue
            </button>
            <button 
            onClick={()=> setColor("green")}
            className=" px-3 py-1 rounded"
            style={{backgroundColor:"green"}}>
              Green
            </button>
            <button 
            onClick={()=> setColor("blue")}
            className=" px-3 py-1 rounded"
            style={{backgroundColor:"blue"}}>
              Blue
            </button>
            <button 
            onClick={()=> setColor("orangered")}
            className=" px-3 py-1 rounded"
            style={{backgroundColor:"orangered"}}>
              Orangered
            </button>
            <button 
            onClick={()=> setColor("purple")}
            className=" px-3 py-1 rounded"
            style={{backgroundColor:"purple"}}>
              Purple
            </button>
            <button 
            onClick={()=> setColor("grey")}
            className=" px-3 py-1 rounded"
            style={{backgroundColor:"grey"}}>
              Grey
            </button>
            <button 
            onClick={()=> setColor("violet")}
            className=" px-3 py-1 rounded"
            style={{backgroundColor:"violet"}}>
              Violet
            </button>
          </div>
      </div>
    </div>
  )
}

export default App
