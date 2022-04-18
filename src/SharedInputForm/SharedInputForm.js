import React,{useContext} from 'react';
import {Bell,Calendar, Clock, Palette} from 'react-bootstrap-icons';
import { MuiPickersUtilsProvider ,DatePicker,TimePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import './SharedInputForm.css';
import { IndexContext } from '../Context/IndexContext';

const SharedInputForm = ({heading,todo,setTodo,day,setDay,time,setTime,showButtons,todoProject,setTodoProject})=>{
  const {projectsItems}=useContext(IndexContext);
  return (
   <>
   <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <form>

      {/* Input to add new Todo */}
        <div className='addTodoInput'>
          {heading && <label htmlFor="todo">Add a new to do!</label>}
          <input type="text" id="todo" name='todo' value={todo} placeholder='To do......' onChange={(e)=>setTodo(e.target.value)} autoFocus/>
          
          <div className='title'>
            <Bell/> 
            <span>Remind me!!</span>
          </div>
        </div>

        {/* DatePicker Component */}

        <div className='addDate'>
        <div className='title'>
            <Calendar color='red'/> &nbsp;
            <span>Choose Date</span>
          </div>
          <DatePicker value={day} onChange={day=>setDay(day)}/>

        </div>

        {/* TimePicker Component */}

        <div className='addTime'>
        <div className='title'>
            <Clock/>  &nbsp;
            <span>Choose Time!!</span>
          </div>
          <TimePicker value={time} onChange={time=>setTime(time)}/>
        </div>

        {/* Choose Project */}
        <div className='chooseProject'>
          <Palette/> <span>Choose Project</span>
          <div className='projects'>
          {projectsItems.length >0?
              projectsItems.map(project=>{
                  return(
                    <div key={project.name}>
                    
                      <div  className={`project ${project.name===todoProject?'active':""}` }>
                      <span  onClick={()=>setTodoProject(project.name)}>{project.name}</span>
                    </div>
                   
                    
                  
                  
                  </div>
                  
                    
                  
                  )
              }):
                <div style={{color:'#ff0000'}}>
                        Please Add a project before proceeding
                      </div> 
          }
          </div>
          
        
         
       
         </div>
        
        {showButtons && <div className='submitBtn'>
        <button type="submit" >+ Add TODO</button>
        </div>}
        
        </form>
        </MuiPickersUtilsProvider></>
  )
}

export default SharedInputForm