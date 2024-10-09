import React, { useState } from 'react'
import SongData from "../songsmap/SongData.json"
import { useNavigate } from 'react-router-dom'
import { useMusicCategroy } from '../../context/ContextMusic'

export const Dashboard = () => {
         
     const navigate_=useNavigate()
     const {setNewSong,setCurrent}=useMusicCategroy()

    
   
                    
                    
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
                    <div className=' w-11/12 lg:w-11/12 h-14 flex justify-evenly   py-5 items-center border-2 shadow-lg rounded-lg bg-pink-200 '>
                          <img className=' w-12 h-12 row-span-2 rounded-full  bg-purple-300' src="image/HD-wallpaper-arijit-singh-removebg-preview.png" alt="" />
                          <h4 className='text-xs'>{item.title}</h4>
                           <span onClick={()=>{setNewSong(item.song)}}  className='  text-xs rounded-md bg-orange-500 font-semibold px-3 hover:bg-green-400' >Play</span>
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
