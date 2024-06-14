import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
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
            <li className=''><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Connections</a></li>
            <li><button className=' border border-black px-6 py-2 rounded-3xl'>Join</button></li>
          </ul>
        </div>
        </nav>
    </div>

    <div className=' w-full px-28 h-auto bg-slate-200 '>
      <div id="intro" className=' w-full h-auto flex justify-between '>
          <div id="intro-left" className=' w-1/2 h-96 flex items-center justify-center'>
            <p className=' font-semibold '>
            Welcome to MasterMind Coaching, your partner in academic excellence. <br />
            We offer personalized coaching classes tailored to meet the unique <br />
            learning needs of each student. Our expert instructors, innovative <br />
            teaching methods, and comprehensive study materials ensure that every <br />
            learner achieves their highest potential. Whether you're preparing <br />
            for exams, enhancing skills, or seeking academic support, MasterMind <br />
            Coaching is here to guide you every step of the way. Join us in turning <br />
            academic goals into remarkable achievements.
            </p>
          </div>
          <div id="intro-right" className=' w-1/2 h-96 flex justify-center items-center '>
            <img src="https://i.pinimg.com/originals/df/f7/d6/dff7d6d0906e69487045d65292d437dc.png" alt="" 
            className=' h-80 w-80 rounded-lg '
            />
          </div>
      </div>
      <div id='oportunities' className=' w-full h-auto '>
        <h1 className=' bg-red-500 font-bold py-3 px-3 inline border border-black rounded-3xl'>Oportunity-</h1>
        <div className=' h-auto flex justify-evenly py-6'>
          <div className=' h-96 w-1/4 rounded-2xl flex flex-col items-center border border-red-500'>
            <h1 className=' py-3 font-semibold'>Personalized Tutoring and Exam Preparation</h1>
            <img src="https://tse1.mm.bing.net/th?id=OIP.v2INlHirqnZ_WA9DEKOxiwHaE8&pid=Api&P=0&h=220" alt="" 
            className=' h-48 w-60 rounded-lg'/>
            <p className=' py-6 h-full px-4'>Tailored lessons and intensive coaching for individual needs and competitive exams.</p>
          </div>
          <div className=' h-96 w-1/4 rounded-2xl flex flex-col items-center border border-red-500'>
            <h1 className=' py-3 font-semibold'>Skill Enhancement and Group Classes</h1>
            <img src="https://tse4.mm.bing.net/th?id=OIP.HQRwb14l99iV2Ljf-ZlPuwHaFG&pid=Api&P=0&h=220" alt="" 
            className=' h-48 w-60 rounded-lg'/>
            <p className=' py-6 h-full px-4'>Courses to develop critical thinking, problem-solving skills, and collaborative learning environments.</p>
          </div>
          <div className=' h-96 w-1/4 rounded-2xl flex flex-col items-center border border-red-500'>
            <h1 className=' py-3 font-semibold'>Online Learning and Workshops</h1>
            <img src="https://tse3.mm.bing.net/th?id=OIP.hPuWPxuHWFydOK9624HfCAHaE8&pid=Api&P=0&h=220" alt="" 
            className=' h-48 w-60 rounded-lg'/>
            <p className=' py-6 h-full px-4'>Flexible online sessions, plus workshops on study techniques, time management, and career guidance.</p>
          </div>
        </div>
      </div>
    </div>

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
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <ul className='w-1/4'>
            <li><a href="">Connections</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Events</a></li>
          </ul>
          <ul className='w-1/4'>
            <li><a href="">Facebook</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Twitter</a></li>
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

export default App
