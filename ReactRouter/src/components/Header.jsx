import React from "react";
import {NavLink} from "react-router-dom"
 function Header(){
    return(
        <>
        <div className=' w-full px-28 h-28 bg-slate-200'>
            <nav className=' flex justify-between h-28 items-center py-6 bg-red-500'>
                <div id="nav-left" className=' h-full w-1/2 flex items-center ps-8 gap-3'>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.CkCoZ5X27jsMvTcRoh0YagHaHa&pid=Api&P=0&h=220" alt="" 
                    className=' h-20 w-20 rounded-lg'/>
                    <h1 className=' font-extrabold '>Master Mind</h1>
                </div>
                <div id="nav-right" className=' w-2/4 h-full'>
                    <ul className=' flex justify-around items-center h-full font-semibold'>
                            <li><NavLink to="/" 
                            className={({isActive})=>`${isActive? "text-white" : "text-black"} text-black`}>
                            Home</NavLink></li>
                            <li><NavLink to="about"
                            className={({isActive})=>`${isActive? "text-white" : "text-black"} text-black`}>
                            About</NavLink></li>
                            <li><NavLink to="contact"
                            className={({isActive})=>`${isActive? "text-white" : "text-black"} text-black`}>
                            Contact</NavLink></li>
                            <li><NavLink to="connections"
                            className={({isActive})=>`${isActive? "text-white" : "text-black"} text-black`}>
                            Connections</NavLink></li>
                            <li><button className=' border border-black px-6 py-2 rounded-3xl'>Join</button></li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
 }

 export default Header;