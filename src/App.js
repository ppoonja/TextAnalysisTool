import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import { useState } from 'react';

function App() {
  const[mode,setMode]=useState({mode:'light',title:'Enable dark mode'});
  
  const toggleMode=()=>{
    if(mode.mode==="light"){
      setMode(prevState=>({...prevState,mode:"dark",title:"Disable dark mode"}));
    }else{
      setMode(prevState=>({...prevState,mode:"light",title:"Enable dark mode"}));
    }
  }
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
      <Routes>
        <Route path="/Home" element={<Home mode={mode} title='Analysis Tools'/>}></Route>
        <Route path="/AboutUs" element={<AboutUs mode={mode} title='About Us'/>}></Route>
        <Route path="/" element={<Home mode={mode} title='Analysis Tools'/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
