import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Topbar } from './component/topbar/Topbar';
import { MusicPlayer } from './component/musicPlayer/MusicPlayer';
import { Dashboard } from './component/dashboard/Dashboard';
import ContextProvider from './context/ContextMusic';




function App() {
          
  return (
    
       <ContextProvider>
       <BrowserRouter>
       <Topbar/>
      
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
        <MusicPlayer/>
      </BrowserRouter>
       </ContextProvider>
    
  )
}

export default App
