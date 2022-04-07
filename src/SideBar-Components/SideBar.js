import React from "react";
import './SideBar.css';
import AddNewTodo from "./SideBar-Child-Components/AddNewTodo";
import Calender from "./SideBar-Child-Components/Calender";
import ColorLine from "../ColorLined";
import Projects from "./SideBar-Child-Components/Projects";

const SideBar=()=>{
 return(
     <>
    
         <div  className="sidebar">
         <AddNewTodo/>
        <ColorLine color="green"/>
         <Calender/>
         <ColorLine color="green"/>
         <Projects/>
         
        
         </div>
         
        
        
   
    
     {/* <h1>hello world</h1> */}
      
     </>
     
  
 );   

}
 export default SideBar;