import React from 'react'
import logo from '../assets/nav-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav>
        <div className="logo-img">
          <img src={logo} alt="logo-img" />
        </div>
        <div className="nav-options">
          <ul>
            <li>
              <Link to="#">Course</Link>
            </li>
            <li>
              <Link to="#">Blogs</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <button>Dashboard</button>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
