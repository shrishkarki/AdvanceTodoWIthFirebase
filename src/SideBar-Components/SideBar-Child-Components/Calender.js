import React, { useContext } from 'react';
import { Calendar, CaretUp } from 'react-bootstrap-icons';
import './Calender.css';
import { IndexContext } from '../../Context/IndexContext';

const Calender = () => {
  const calenderFormat=["Today", "Next7Days", "All Days " ];
  const {setSelectedProject}=useContext(IndexContext)
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
         <div key={days}>
         
           <li className='calender-list'  onClick={()=>setSelectedProject(days)}>{days}</li>
         
         </div>)
       })}
       </ul>

     </div>
    </div>
  )
}

export default Calender;