import React,{useContext} from 'react';
import { IndexContext } from '../Context/IndexContext';
import Todo from './Todo';
import Next7days from './Next7days';
import './Main.css';
import EditTodo from './EditTodo';

const Main = () => {
  // const appItems=[
  //   {id:11,
  //     name:"Go to market",
  //     time:"11:25 AM",
  //     date:"08/02/2022",
  //     day:"1",
  //     checked:true,
  //     color:"#00ff00",
  //     project:"work"},

  //     {id:12,
  //       name:"Visit the Office",
  //       time:"09:20 PM",
  //       date:"07/03/2022",
  //       day:"3",
  //       checked:false,
  //       color:"#00ff00",
  //       project:"other"}
  // ]
  // const selectedItems="Todo";
  const {todos,selectedProject}=useContext(IndexContext);
  return (
    <>
    
    <div className='main'>
    <div className='main-header'>
        {selectedProject}
      
      </div>
      <div className='main-container'>
        {selectedProject=== "Next7Days"?
         <Next7days/>:
         todos.map(todo=>{
           return <Todo todoItems={todo} key={todo.id}/>
         })
         }

      </div>
    </div>

    <div className='Edit-Todo'>
      <EditTodo/>

    </div>
    </>
      
    
  )
}

export default Main