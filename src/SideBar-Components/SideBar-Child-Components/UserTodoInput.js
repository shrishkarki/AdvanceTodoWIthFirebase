import React ,{useState} from 'react';
import './UserTodoInput.css';
import {Bell,Calendar, Clock, Palette} from 'react-bootstrap-icons';
import { MuiPickersUtilsProvider ,DatePicker,TimePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// import { setDate } from 'date-fns';
const UserTodoInput = () => {
  const [todo,setTodo]=useState('');
  const [day,setDay]=useState(new Date());
  const [time,setTime]=useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <form>

      {/* Input to add new Todo */}
        <div className='addTodoInput'>
          <label htmlFor="todo">Add a new to do!</label>
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
            <div className='project active'>
              personal
            </div>
            <div className='project'>
              work
            </div>
          </div>

        </div>
        
        <div className='submitBtn'>
        <button type="submit" >+ Add TODO</button>
        </div>
        
        </form>
        </MuiPickersUtilsProvider>
  )
}

export default UserTodoInput