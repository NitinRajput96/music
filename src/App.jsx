import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
        
  const audio=document.getElementById("musicplay")
  
  useEffect(()=>{
   
  },[])
  

  const audPaly=()=>{
       audio.play()
  }

  const audioPush=()=>{
      audio.pause()
  }
              
   
  return (
    <>
       <div className=' w-52 h-52  bg-slate-700'>
       <audio id='musicplay' >
           <source src="/music/old_Aakrosh - Saude Bazi (Encore).mp3" />
        </audio>
        <button onClick={audPaly}>Play</button>
        <button onClick={audioPush}>Poush</button>
      
       </div>
    </>
  )
}

export default App
