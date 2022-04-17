import React,{useState,useContext,useEffect} from 'react';
import './EditTodo.css';
import SharedInputForm from '../SharedInputForm/SharedInputForm';
import { IndexContext } from '../Context/IndexContext';

const EditTodo = () => {
  const {selectedProject}=useContext(IndexContext);
  const projectsItems=[
    {id:1,name:"other",numberOfTodos:4},
    {id:2,name:"work",numberOfTodos:0},
    {id:3,name:"personal",numberOfTodos:3}
];
const [todo,setTodo]=useState('');
const [day,setDay]=useState(new Date());
const [time,setTime]=useState(new Date());
const [todoProject,setTodoProject]=useState(selectedProject);
useEffect(()=>{
  setTodoProject(selectedProject);
},[selectedProject]);

// console.log(todoProject)

        
  return (
    <>
    <div className='Edit-Todo-container'>EditTodo
     <SharedInputForm
       
         todo={todo}
          setTodo={setTodo}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          projectsItems={projectsItems}
          showButtons={false}
          todoProject={todoProject}
          setTodoProject={setTodoProject}

          />
    </div>
    </>
    
  )
}

export default EditTodo