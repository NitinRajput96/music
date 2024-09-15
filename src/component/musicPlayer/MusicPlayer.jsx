import React, { useState } from 'react'
import { IoMdPlay } from "react-icons/io";
import { MdOutlinePause } from "react-icons/md";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { TbRepeat } from "react-icons/tb";
import { LuShuffle } from "react-icons/lu";
import { MdAddCircleOutline } from "react-icons/md";
import { LuMic2 } from "react-icons/lu";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdDevicesOther } from "react-icons/md";
import { GoUnmute } from "react-icons/go";
import { MdCloseFullscreen } from "react-icons/md";







export const MusicPlayer = () => {
       
            const [state,setState]=useState(false)
            const mpsong=document.getElementById("musicmp");
          
            

            const playaudio=()=>{
                 mpsong.play()
            }

            const pouseaudio=()=>{
                  mpsong.pause()
            }

  return (
     
    <>
       <audio id='musicmp'>
        <source src='music/old_Aakrosh-SaudeBazi(Encore).mp3' />
       </audio>
        <div className='w-full h-[85px] max-[640px]:h-[60px] fixed grid grid-cols-4 max-[640px]:grid-cols-10  bg-black items-center bottom-0'>
        {/* first div */}
             <div className='h-full flex justify-center items-center '>
                      <div className=' w-full h-5/6 px-2 bg-black flex justify-start items-center gap-3'>
                              <img className='w-[63px] h-5/6 border max-[639px]:hidden border-black rounded-lg bg-pink-300' src="image/HD-wallpaper-arijit-singh-removebg-preview.png" alt="" />
                              <span className=' h-5/6 px-2  flex justify-center items-center flex-col max-[640px]:hidden'>
                                <span className=' font-bold text-white text-sm'>Kyu ki tum hi ho</span>
                                <span className=' w-full text-left font-semibold text-gray-400 text-xs' >Arijit Singh</span>
                              </span>
                              <span className=' text-gray-300 text-xl max-[640px]:hidden'>
                                    <MdAddCircleOutline/>
                              </span>

                      </div>
             </div>

             {/* musicplayer */}

             <div className='h-full  bg-black  col-span-2 max-[639px]:col-span-10 max-[640px]:col-span-9'>
                   <div className=' w-full h-3/5 pt-2 bg-black flex justify-center items-center gap-5'>
                        <span className='   text-gray-300  flex justify-center items-center text-lg gap-0 '><LuShuffle/></span>
                        <span className='   text-gray-300 flex justify-center items-center text-xl'><IoPlaySkipBackSharp/></span>
                        {
                          state===false?
                          <span className=' w-8 h-8 border rounded-full bg-white pl-[2px] flex justify-center items-center text-xl' onClick={()=>{playaudio(setState(true))}}><IoMdPlay/></span>
                          :
                          <span className=' w-8 h-8 border rounded-full bg-white  flex justify-center items-center text-2xl' onClick={()=>{pouseaudio(setState(false))}}><MdOutlinePause/></span>

                        }
                        <span className='   text-gray-300  flex justify-center items-center text-xl gap-0 '><IoPlaySkipForwardSharp/></span>
                        <span className='   text-gray-300  flex justify-center items-center  text-lg gap-0 '><TbRepeat/></span>
                   </div>

                   <div className='w-full h-2/5 flex justify-center items-start '>
                          <span className='text-[12px] text-gray-300 mr-2'>3:20</span>
                           <span className=' w-4/6 h-[17px] flex justify-center items-center'><span className=' w-full h-[4px] bg-gray-200 rounded-full'></span></span>
                          <span className='text-[12px] text-gray-300 ml-2'>4:30</span>

                   </div>
             </div>

       {/* 3rd div */}   
             <div className='h-full  bg-black  flex justify-center items-center max-[640px]:hidden '>
                     <div className=' w-full h-5/6  flex justify-center items-center gap-3 '>
                          <span className=' flex  justify-center items-center flex-col  gap-1'>
                              <span className=' w-[15px] h-[17px] flex justify-center items-center border-2 rounded-sm  border-green-600 font-bold text-green-600  text-[8px]'><IoMdPlay/></span>
                              <span className=' rounded-full border-2 border-green-600 '></span>
                          </span>

                          <span   className=' text-gray-300 h-[25px] text-[16px] font-bold'><LuMic2/></span>
                          <span  className=' text-gray-300 h-[25px] text-[19px] font-bold'><HiOutlineQueueList/></span>
                          <span  className=' text-gray-300 h-[25px] text-[19px] font-bold'><MdDevicesOther/></span>
                          <span  className=' text-gray-300 h-[25px] text-[19px] font-bold'><GoUnmute/></span>
                          <span  className=' text-gray-300 h-[10px]  flex justify-center items-start'>
                          <input className='  w-[90px] rounded-[4px]  h-[4px] bg-green-600 ' type="range"  />
                          </span>
                          <span  className=' text-gray-300 h-[25px] text-[16px] font-bo'><MdCloseFullscreen/></span>

                          
                                 
                        
                         
                     </div>
             </div>
            
      </div>
    </>
  )
}
