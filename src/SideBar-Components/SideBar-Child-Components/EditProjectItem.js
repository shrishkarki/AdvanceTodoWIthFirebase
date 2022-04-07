import React from 'react';
import './EditProjectItem.css';



const EditProjectItem = ({inputData,changeEditInput, submitHandler, statusEdit}) => {
  

  
  return (
    <form className='Edit-project-item' onSubmit={submitHandler} >
        <div className='Edit-project-container'>
          <div className='Edit-project-header'>
            <h1>Edit Project</h1>
            

          </div>
        <div className='Edit-Input-Item'>
          <input type="text" value={inputData}  onChange={changeEditInput} autoFocus required/>

        </div>
        <div className='btn-group'>
        <button type='submit' className='btn-edit'>Edit</button>
        <button className='btn-cancel' onClick={statusEdit}>Cancel</button>
        </div>
        
        </div>
       
        </form>
  )
}

export default EditProjectItem;