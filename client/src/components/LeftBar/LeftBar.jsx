import './LeftBar.css';
import { NavLink } from 'react-router-dom';

function LeftBar() {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        <NavLink to="/" className='menuIcon'>
          <img  src="general/logo.png" className='logo' alt="Logo" />
        </NavLink>
        <NavLink to="/" className='menuIcon'>
          <img  src="general/home.svg" alt="Home" />
        </NavLink>
        <NavLink to="/" className='menuIcon'>
          <img  src="general/create.svg" alt="Create" />
        </NavLink>
        <NavLink to="/" className='menuIcon'>
          <img  src="general/updates.svg" alt="Update" />
        </NavLink>
        <NavLink to="/" className='menuIcon'>
          <img  src="general/messages.svg" alt="Message" />
        </NavLink>
      </div>
      <NavLink to="/" className='menuIcon'>
          <img  src="general/settings.svg" alt="Logo" />
        </NavLink>
    </div>
  );
}

export default LeftBar;