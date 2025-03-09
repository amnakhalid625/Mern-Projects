import React from 'react'
import logoImg from '../assets/nav-logo.png'
import profile from '../assets/profile.png'
import {Link} from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";
import SecondCard from './SecondCard'


const TeacherDashboard = () => {
  return (
    <div>
          <div className="sidebar">
  <img src={logoImg} alt="Logo" />
  <img src={profile} alt="Profile" className="profile-image" />
  <p>Fatima</p>
  <ul className="sidebar-links">
    <li><Link to="/course" className="sidebar-link">Courses</Link></li>
    <li><Link to="/students" className="sidebar-link">Students</Link></li>
    <li><Link to="/setting" className="sidebar-link">Setting</Link></li>
    <li><Link to="/login" className="sidebar-link">Logout</Link></li>
  </ul>
</div>
<div className="dashboard-body">
    <h1 className='text-left ml-80 mt-5 font-bold text-blue-800 text-3xl'>My Courses</h1>
    <div className="inputs">
    <input type="text" placeholder='Search Here' />
    <button>
    <FaCirclePlus size={30} />
    </button>
    </div>
    <SecondCard />


  
    
</div>
    </div>
  )
}

export default TeacherDashboard