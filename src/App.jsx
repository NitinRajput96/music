import './App.css'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Topbar } from './component/topbar/Topbar';
import { MusicPlayer } from './component/musicPlayer/MusicPlayer';
import { Dashboard } from './component/dashboard/Dashboard';




function App() {
          
  return (
    <>
      <BrowserRouter>
       <Topbar/>
       <MusicPlayer/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
