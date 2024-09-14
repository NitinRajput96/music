import { useEffect,useState} from 'react'
import './App.css'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

function App() {
        
  const audio=document.getElementById("musicplay")
  const [state,setState]=useState(false)
  
  
  const audPaly=()=>{
       audio.play()     
  }

  const audioPush=()=>{
      audio.pause()
  }

  useEffect(()=>{
             
  },[])
              
   
  return (
    <>
        <audio id='musicplay' >
           <source src="/music/old_Aakrosh - Saude Bazi (Encore).mp3" />
        </audio>

       <div className=' w-full h-52  bg-slate-100 flex justify-center items-center'>
                <div  className=' rounded-lg w-60 h-40 bg-gradient-to-r from-pink-600 to-indigo-600  border-2 flex justify-center items-center gap-8 '>
             {
              state===false?   <button  className=' rounded-md p-1 bg-gray-200 text-xs ' onClick={()=>audPaly(setState(true))}><FaPlay/></button>:
              <button  className=' rounded-md p-1 bg-gray-200 text-xs ' onClick={()=>{audioPush(setState(false))}}><FaPause/></button>
             }
                 </div>
       </div>
    </>
  )
}

export default App
