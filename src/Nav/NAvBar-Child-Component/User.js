import React from 'react';
import Logo from '../Nav-assets/Images/sklogo.png'
import "./User.css";

const User = () => {
  return (
    <>
    
    <img  className="logo" src={Logo} alt="user"/>
    <p className='userName'>Shrish Karki</p>
    {/* <button>Logout</button> */}
    </>
    
  )
}

export default User