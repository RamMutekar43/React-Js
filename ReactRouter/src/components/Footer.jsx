import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <div id="footer" className=' w-full px-28 h-auto bg-slate-200'>
            <div className=' w-full h-56 flex bg-red-500 '>
                    <div className=' h-auto w-1/4 flex flex-col items-center justify-center'>
                        <img src="https://tse2.mm.bing.net/th?id=OIP.CkCoZ5X27jsMvTcRoh0YagHaHa&pid=Api&P=0&h=220" alt="" 
                        className=' h-40 w-40 rounded-lg'/>
                        <h1 className=' font-extrabold '>Master Mind</h1>
                    </div>

                    <div id="join" className=' h-auto w-1/4 flex items-center font-semibold'>
                        <p></p>
                    </div>
                <div className=' h-auto w-1/2 flex items-center justify-evenly underline font-semibold'>
                    <ul className='w-1/4'>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Contact</Link></li>
                    </ul>
                    <ul className='w-1/4'>
                        <li><Link to="">Connections</Link></li>
                        <li><Link to="">Projects</Link></li>
                        <li><Link to="">Events</Link></li>
                    </ul>
                    <ul className='w-1/4'>
                        <li><Link to="">Facebook</Link></li>
                        <li><Link to="">Instagram</Link></li>
                        <li><Link to="">Twitter</Link></li>
                    </ul>
                </div>
            </div>
            <div className=' bg-black text-white font-light h-10 flex justify-center items-center'>
        2024.All Rights Reserved.
            </div>
        </div>
    </>
    )
}

export default Footer;