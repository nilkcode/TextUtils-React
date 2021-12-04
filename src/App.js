import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/TextForms';
import About from './components/About';
import TextConverter from './components/TextConverter';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Alert from './components/Alert';



function App() {
   
  const [mode, setMode] = useState("light");  // whether dark  mode is enbled or not
  const [alert, setalert] = useState(null);

  
   
  const showAlert = (message ,type) => {
    setalert({
        msg: message,
        type:type
    })

    setTimeout( () => {
         
      setalert(null)
      
    },1500)
  }

  const toogleMode = ()  => {
     
      if(mode === "light") {
        setMode('dark');
        document.body.style.backgroundColor = '#181b1e';
        showAlert("Dark Mode has been Enbled" , "success");
        document.title = 'dark mode Enables'
      }
      else {
        setMode('light');
        document.body.style.backgroundColor = '#e3e3e3';
        showAlert("Light Mode has been Enbled" , "success");
        document.title = 'light mode Enables'
      }

  }

  // const modeColor = (color) => {
      
  //   if(color === 'green' ){
  //     document.body.style.backgroundColor = '#8aad8a';
    
  //     showAlert("Light Mode has been Enbled" , "success");
     

  //   }
  //   else if(color === 'red') {
  //     document.body.style.backgroundColor = '#c57873de';
  //     showAlert("Light Mode has been Enbled" , "success");
  //   }
  //   else if (color === 'yellow') {
  //     document.body.style.backgroundColor = '#d9d96f';
  //     showAlert("Light Mode has been Enbled" , "success");
  //   }
  //modeColor={modeColor}
  // }

  return (
    <div>
    
     <Router>
     <Navbar title="Textutils"  mode={mode} toogleMode={toogleMode}  />
      <Alert  alert={alert}/>
      <div className="container">
      <Routes> 
       {/* <Textforms showAlert={showAlert}  heading="Enter text analyze below" mode={mode}/> */}
       <Route exact path="/textforms" showAlert={showAlert} element={<Textforms  heading="Enter text analyze below"  mode={mode} />}   />
        <Route  exact path="/about" element={<About mode={mode}  heading="About Us Page"/>}   /> 
       </Routes>
       
       {/* <TextConverter/>  */}
       </div> 
      </Router> 
    </div>
 
  );
}


export default App;