import React,{useState} from 'react';
import './AddNewTodo.css';
import ModalPopUp from './ModalPopUp';

const AddNewTodo = () => {
    const [showModal,setShowModal]=useState(false);
  return (
      <>
       <button className='addTodo' onClick={()=>setShowModal(true)}>+ ADD NEW TODO</button>
       
       {showModal && <ModalPopUp statusModal={()=>setShowModal(false)} ></ModalPopUp>}
       
      </>
   
  )
}

export default AddNewTodo