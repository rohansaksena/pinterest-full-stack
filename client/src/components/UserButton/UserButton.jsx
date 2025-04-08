import { useState } from 'react';
import './UserButton.css'
import {NavLink} from 'react-router-dom'
import Image from '../Image/Image';

function UserButton() {

  const user = true;
  const[open, setOpen] = useState(false);

  return user ? (
    <div className="userButton">
        <Image path="general/noAvatar.png" alt="userAvatar"/>
        <Image path="general/arrow.svg" 
        className='arrow' 
        onClick={() => setOpen((prev) => !prev)} 
        alt="dropDownArrow"/>

        {open && <div className='userOptions'>
            <div className='userOption'>Profile</div>
            <div className='userOption'>Setting</div>
            <div className='userOption'>Logout</div>
        </div>}

    </div>
  ) 
  : 
  (
    <NavLink to="/" className='loginLink'>
        Login / Sign Up
    </NavLink>
  )
}

export default UserButton