import React from 'react';
import { Calendar, CaretUp } from 'react-bootstrap-icons';
import './Calender.css';

const Calender = () => {
  const calenderFormat=["Today", "Next 7 Days", "All Days " ];
  return (
    <div className='calender'>
     <div className='header'>
       <div className='title'> 
          <span><Calendar/> &nbsp;Calendar</span>
          <CaretUp/>

       </div>

     </div>
     <div className='calender-container'>

     <ul> {calenderFormat.map(days=>{
         return(
         <>
         
           <li className='calender-list' key={days}>{days}</li>
         
         </>)
       })}
       </ul>

     </div>
    </div>
  )
}

export default Calender;