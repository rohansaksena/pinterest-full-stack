import Image from '../Image/Image';
import './LeftBar.css';
import { NavLink } from 'react-router-dom';

function LeftBar() {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        <NavLink to="/" className='menuIcon'>
          <Image  path="/general/logo.png" className='logo' alt="Logo" />
        </NavLink>
        <NavLink to="/" className='menuIcon'>
          <Image  path="general/home.svg" alt="Home" />
        </NavLink>
        <NavLink to="/create" className='menuIcon'>
          <Image  path="general/create.svg" alt="Create" />
        </NavLink>
        <NavLink to="/" className='menuIcon'>
          <Image  path="general/updates.svg" alt="Update" />
        </NavLink>
        <NavLink to="/" className='menuIcon'>
          <Image  path="general/messages.svg" alt="Message" />
        </NavLink>
      </div>
      <NavLink to="/" className='menuIcon'>
          <Image  path="general/settings.svg" alt="Logo" />
        </NavLink>
    </div>
  );
}

export default LeftBar;