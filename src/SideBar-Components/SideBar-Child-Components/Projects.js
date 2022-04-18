import React, { useState,useContext, useEffect } from 'react';
import { Palette, Pencil, Plus, CaretUp, Flag} from 'react-bootstrap-icons';
import './Projects.css';
import ProjectsItems from './ProjectsItems';
import AddNewProject from './AddNewProject';
import { IndexContext } from '../../Context/IndexContext';
// const projectsItems=[
//     {id:1,name:"other",numberOfTodos:4},
//     {id:2,name:"work",numberOfTodos:0},
//     {id:3,name:"personal",numberOfTodos:3}
// ];

const Projects = () => {
    const {projectsItems}=useContext(IndexContext);
    const [items,setItems]=useState(projectsItems);
    const [editProject,setEditProject]=useState(false);
    const [addProject,setAddProject]=useState(false);

    useEffect(()=>{
        setItems(projectsItems)
    },[projectsItems])
    
    
    
    const deleteProjectHandler=(id)=>{
        const newItems=items.filter(i=>{
            return i.id!==id
        });

        setItems(newItems);

    }

    const liftingUpData=(Data)=>{
        var Flag=0;
        
        items.filter(fil=>{
            if(fil.name === Data.name){
                Flag=1;
            //    return false;
            }
            return fil;      
        });
        if(Flag===1){
            alert("This Project Name already present");
            
            return false;
        }
        setItems((prevData)=>{
            return[...prevData,Data]
        })
    }
    const saveProps=(data)=>{
        setItems(data);
    }

    // const EditProjectItemHandler=(e)=>{
    //     setItems(prevData=>{
    //         return[...prevData]
    //     })

    // }
  return (
    <div className='projects'>
        <div className='projects-header'>
            <div className='projects-title'>
                <span><Palette/>&nbsp; Projects</span>
                <div className='projects-tools'>
                 <span><Pencil onClick={()=>setEditProject(!editProject)}/></span>
                 <span><Plus onClick={()=>setAddProject(true)}/></span>
                 <span><CaretUp/></span>
                </div>

            </div>

        </div>
        
            {addProject &&<AddNewProject statusAddProject={()=>setAddProject(false)} onSaveData={liftingUpData}/>}
        <ProjectsItems statusEdit={editProject} items={items} deleteFn={deleteProjectHandler} onSaveProps={saveProps}/>
        

    </div>
  )
}

export default Projects