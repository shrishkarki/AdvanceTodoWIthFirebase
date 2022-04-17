import React,{useState,useContext} from 'react';
import './ProList.css';
import { PencilFill, XCircle} from 'react-bootstrap-icons';
import EditProjectItem from './EditProjectItem';
import { IndexContext } from '../../Context/IndexContext';



const ProjectsItems = ({statusEdit,items,deleteFn,onSaveProps}) => {
  const [editProjectItem,setEditProjectItem]=useState(false);
  const [inputData,setInputData]=useState('');

  const {setSelectedProject}=useContext(IndexContext);




  const handleEditClick=(pro)=>{
    setEditProjectItem(true);
    setInputData(pro);
  }

  const changeEditInput=(e)=>{
    setInputData({...inputData,name:e.target.value})
  }


  const editSubmitHandler=(e)=>{
    e.preventDefault();

    const projectIndex=items.findIndex(inx=>{
      return inx.id===inputData.id;
  });

     items[projectIndex]=inputData;

     onSaveProps([...items]);
     setEditProjectItem(false);



  }
  
  




 
   
  return (
    <div className='projects-items'>
        <ul>{items.map(pro=>{
            return(
             
           <li key={pro.id} className="projects-items-list" >
             
                 <span onClick={()=>setSelectedProject(pro.name)}>{pro.name}</span>
                  {statusEdit &&
                   (<div className='projects-items-tools'>
                     <span><PencilFill color="blue" onClick={()=>handleEditClick(pro)} /> </span> 
                     <span><XCircle color='red' onClick={()=>deleteFn(pro.id)} /></span>
                     </div>
                     )}

                  {!statusEdit &&
                   pro.numberOfTodos > 0 && 
                   (<div className='projects-items-todos'>{pro.numberOfTodos}</div>)}
                  
                   </li>

                  
            );
          
           
        })}</ul>

        {/* {editProjectItem && <EditProjectItem status={()=>setEditProjectItem(true)}/>} */}
        {editProjectItem && <EditProjectItem inputData={inputData.name} changeEditInput={changeEditInput} submitHandler={editSubmitHandler} statusEdit={()=>setEditProjectItem(false)}/>}

    </div>
  )
}

export default ProjectsItems