import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext"

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser}= useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <>
            <h2>Login</h2>
            <input 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type="text" 
            placeholder="username"
            className=" outline-none bg-gray-200 rounded px-3 py-2 text-black"
            />

            <input
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            type="text"
            placeholder="password" 
            className=" outline-none bg-gray-200 rounded px-3 py-2 ms-1 text-black"
            />

            <button onClick={handleSubmit} className=" ms-1">Submit</button>
        </>
    )
}

export default Login;