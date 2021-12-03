import React from 'react'; 
import './App.css'; 
import home from "./Home"; 
import dashboard from "./type/dashboard"; 
import about from "./type/about"; 
import Navbar from "./type/navbar";  
import {BrowserRouter,Switch,Route} from "react-router-dom"; 
function App() { 
 
   
  return ( 
    <div className="main"> 
     
     <BrowserRouter> 
    <Navbar/> 
    <Switch> 
    <Route exact path="/home" component={home} ></Route> 
      <Route exact path="/dashboard" component={dashboard} ></Route> 
      <Route exact path="/about" component={about} ></Route>   
     
    </Switch> 
    </BrowserRouter> 
 
 
  


     
    </div> 
 
 
  ); 
} 
 
export default App;