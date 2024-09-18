import { useContext,createContext, useState } from "react";

 export const CreateContext=createContext()

 const ContextProvider=({children})=>{
        const [newSong,setNewSong]=useState()
     return(
      <CreateContext.Provider value={{newSong,setNewSong}}>
        {children}
      </CreateContext.Provider>
     )
}

export const useMusicCategroy=()=>{
       return useContext(CreateContext)
}
export default ContextProvider;