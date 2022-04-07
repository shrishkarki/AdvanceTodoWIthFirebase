import React from 'react';
import Todo from './Todo';
import Next7days from './Next7days';
import './Main.css';
import EditTodo from './EditTodo';

const Main = () => {
  const appItems=[
    {id:11,
      name:"Go to market",
      time:"11:25 AM",
      date:"08/02/2022",
      day:"1",
      checked:true,
      color:"#00ff00",
      project:"work"},

      {id:11,
        name:"Visit the Office",
        time:"09:20 PM",
        date:"07/03/2022",
        day:"3",
        checked:false,
        color:"#00ff00",
        project:"other"}
  ]
  const selectedItems="Todo";
  return (
    <>
    
    <div className='main'>
    <div className='main-header'>
        {selectedItems}
      
      </div>
      <div className='main-container'>
        {selectedItems=== "next 7 Days"?
         <Next7days/>:
         appItems.map(todo=>{
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