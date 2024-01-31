import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import Alert from './Component/Alert';
import { useState } from 'react';

function App() {
  const[mode,setMode]=useState({mode:'light',title:'Enable dark mode'});
  const[alert,setAlert]=useState(null);

  const showAlert=(status,message)=>{
    setTimeout(()=>{setAlert(null)},1500);
    setAlert({
      status:status,
      msg:message
    });
  }

  const toggleMode=()=>{
    if(mode.mode==="light"){
      setMode(prevState=>({...prevState,mode:"dark",title:"Disable dark mode"}));
      showAlert('Success','Dark mode has been enabled')
    }else{
      setMode(prevState=>({...prevState,mode:"light",title:"Enable dark mode"}));
       showAlert('Success','Dark mode has been disabled')

    }
  }
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <Routes>
        <Route path="/Home" element={<Home mode={mode} showAlert={showAlert} title='Analysis Tools'/>}></Route>
        <Route path="/AboutUs" element={<AboutUs mode={mode} title='About Us'/>}></Route>
        <Route path="/" element={<Home mode={mode} showAlert={showAlert} title='Analysis Tools'/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
