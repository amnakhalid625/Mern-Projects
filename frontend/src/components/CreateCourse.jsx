import React from 'react'
import logoImg from '../assets/nav-logo.png'
import profile from '../assets/profile.png'
import {Link} from 'react-router-dom'
import computer from '../assets/computer.png'

const CreateCourse = () => {
  return (
    <>
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

<div className="create-couse">
    <div className="left-form">
        <h1>Create Course</h1>
        
            <input type="text" id="course-name" placeholder="Enter course name" />
            <input type="text" id="course-code" placeholder="Enter course code" />
            <textarea id="course-description" placeholder="Enter course description"></textarea>
            <button type="submit">Create Course</button>
    </div>
    <div className="right-image">
        <img src={computer} alt="" />
    </div>
</div>
    
    
    </>
  )
}

export default CreateCourse