import React, { useState } from 'react'
import logoImg from '../assets/nav-logo.png'
import profile from '../assets/profile.png'
import {Link} from 'react-router-dom'
import courseImg from '../assets/course.png'
import UpdateCourse from './UpdateCourse'

const AllStudent = () => {
    const [showModal,setShowModal] = useState(false)
  return (
 
  <div className='all-student'>
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

<div className="student-card">
    <img src={courseImg} alt="" />
    <p>Web development</p>
    <input type="text" placeholder='All Student' />
    <button onClick={()=>setShowModal(true)}>Update</button>
    {showModal && <UpdateCourse onClose={()=>setShowModal(false)} />}
    <button>Delete</button>

</div>
</div>
  )
}

export default AllStudent