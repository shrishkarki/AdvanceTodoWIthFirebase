import React,{useState} from 'react';
import './AddNewProject.css';
import { X, PlusCircle } from 'react-bootstrap-icons';

const AddNewProject = ({statusAddProject,onSaveData}) => {
  const [addProjectItem,setAddProjectItem]=useState('');

  const submitHandler=(e)=>{
    e.preventDefault();
    const items={
      id:Math.random(),
      name:addProjectItem,
      numberOfTodos:0

    }
    onSaveData(items);
    setAddProjectItem('');


  }


  return (
    <form className='AddNewProject' onSubmit={submitHandler}>
      <div className='AddNewProject-container'>
        <div className='AddNewProject-header'>
            <h3>Add New Project</h3>
            <X size={30} onClick={statusAddProject}/>
            </div>
            <div className='AddNewProject-input'>
              <input type="text" value={addProjectItem} placeholder='Add Project'autoFocus required onChange={(e)=>setAddProjectItem(e.target.value)}/>
            </div>
            <div className='btn'>
            <button type='submit'><PlusCircle/> &nbsp;Add</button>
            </div>
              
              
            </div>
            </form>
  )
}

export default AddNewProject;