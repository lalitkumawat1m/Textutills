// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("dark");
  const [alert,setAlert]=useState("primery");

  const showAlert=(message,type)=>{
    setAlert(
      message,
      type
    )
  }

  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="gray";
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been Enabled","danger");
    
    }
  }
  return (
    <>
        <Router >
        <Navbar title="Textutills" abouttext="about us" mode={mode} toggleMode={toggleMode}/>
          
            <Alert alert={alert}/>
          <div className="container my-3">
          <Switch>
          <Route  exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter Text To Analyze"/> 
             
          </Route>
         
        </Switch>
             
          </div>
            </Router>
         
    </>
  );
}

export default App;
