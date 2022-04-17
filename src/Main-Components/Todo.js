import React,{useState} from 'react';
import { CheckCircleFill,Circle, Trash, ArrowClockwise } from 'react-bootstrap-icons';
import './Todo.css';

const Todo = ({todoItems,keys}) => {
  const [hover,setHover]=useState(false);
  return (
    <div className='Todo' key={keys}>
      <div
       className='Todo-container'
       onMouseEnter={()=>setHover(true)}
       onMouseLeave={()=>setHover(false)}>

          {/* for checked button */}
         <div className='check-todo'>
           {
             todoItems.checked ?
             <span className='checked'>
               <CheckCircleFill/>
             </span>:
             <span className='unchecked'>
               <Circle color={todoItems.color}/>

             </span>
           }
         </div>

         {/* for text  */}
           <div className='text'>
             <p style={{color:todoItems.checked?'#bebebe':'#000'}}>{todoItems.name}</p>
             <span>{todoItems.time}-{todoItems.project}</span>
             <div className={`line ${todoItems.checked?"line-through":""}`}></div>
           </div>

           {/* add to next Day */}

           <div className='add-to-next-day'>
             {
               todoItems.checked && 
               <span>
                  <ArrowClockwise/> 
               </span>
               
             }
           </div>

           {/* delete Icon */}
           <div className='delete-todo'>
             {
               (hover || todoItems.checked) &&
               <span>
                 <Trash/>
               </span>
             }

           </div>

      </div>

    </div>
  )
}

export default Todo;