import React from "react";
import './ModalPopUp.css';
import UserTodoInput from "./UserTodoInput";
import { X } from "react-bootstrap-icons";

const ModalPopUp=({statusModal})=>{
    return(
       <div className="modal">
        <div className="modal-content">
        <UserTodoInput/>
        
        <p className="cancel-button" onClick={statusModal}><X size={30}/></p>
      
            
        
        </div>
       
       </div>
    )
}
export default ModalPopUp;