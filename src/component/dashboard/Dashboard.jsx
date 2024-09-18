import React, { useState } from 'react'
import SongData from "../songsmap/SongData.json"
import { useNavigate } from 'react-router-dom'
import { useMusicCategroy } from '../../context/ContextMusic'

export const Dashboard = () => {
         
     const navigate_=useNavigate()
     const {setNewSong}=useMusicCategroy()

    
   
                    
                    
  return (
    <>
   
       <div className='w-full h-full flex justify-center items-center  '>
          {/* sidenavBar  */}
        <div className=' w-20 h-[80vh] bg-black text-white max-[640px]:hidden'>Sidebar</div>
         <div className=' w-full h-[80vh] bg-purple-300 '>
            <div className=' w-auto  h-full border- grid justify-items-center items-center py-2  lg:grid-cols-4 gap-5 sm:grid-cols-2 md:grid-cols-3'>
            {
                SongData.allSongs.map((item,i)=>{
                  return(
                    <div className=' w-64 h-40 grid grid-rows-3 gap-2 py-5 justify-items-center items-center border-2 shadow-lg rounded-lg bg-pink-200 '>
                          <img className=' w-28 h-28 rounded-full' src="N" alt="" />
                          <h4 className=''>{item.title}</h4>
                           <span onClick={()=>{setNewSong(item.title)}} className=' p-1 text-xs rounded-md bg-orange-500 font-semibold px-3 hover:bg-green-400' >Play</span>
                           <audio className=' w-5/6 h-4  bg-pink-300 text-purple-600' src={item.song} controls></audio>
                    </div>
                  )
                })
              }
            </div>
         </div>
      </div>
    </>
  )
}
