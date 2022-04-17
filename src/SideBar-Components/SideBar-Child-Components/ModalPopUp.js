import React,{useState,useContext } from "react";
import './ModalPopUp.css';
// import UserTodoInput from "./UserTodoInput";
import SharedInputForm from "../../SharedInputForm/SharedInputForm";
import { X } from "react-bootstrap-icons";
import { IndexContext } from "../../Context/IndexContext";
const projectsItems=[
  {id:1,name:"other",numberOfTodos:4},
  {id:2,name:"work",numberOfTodos:0},
  {id:3,name:"personal",numberOfTodos:3}
];
const ModalPopUp=({statusModal})=>{
   const {selectedProject}=useContext(IndexContext);
    const [todo,setTodo]=useState('');
  const [day,setDay]=useState(new Date());
  const [time,setTime]=useState(new Date());
  const [todoProject,setTodoProject]=useState(selectedProject);
 
  
    return(
       <div className="modal">
        <div className="modal-content">
    
        {/* <UserTodoInput/> */}
        <SharedInputForm
        heading="Add a new to do!"
         todo={todo}
          setTodo={setTodo}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          projectsItems={projectsItems}
          showButtons={true}
          todoProject={todoProject}
          setTodoProject={setTodoProject}

          />
        
        <p className="cancel-button" onClick={statusModal}><X size={30}/></p>
      
            
        
        </div>
       
       </div>
    )
}
export default ModalPopUp;