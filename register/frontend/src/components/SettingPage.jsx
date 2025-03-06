import React from 'react'
import logoImg from '../assets/nav-logo.png'
import profile from '../assets/profile.png'
import {Link} from 'react-router-dom'

const SettingPage = () => {
  return (
    <>
  <h1 id='setting'>Setting</h1>
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
<div className="student-form">
  <img src={logoImg}  />
  <input type="text" placeholder='Fatima' />
  <input type="email" placeholder='Fatima@gmail.com'/>
  <input type="text" placeholder='Student' />
  <input type='password' placeholder='Password' />
  <div className="setting-buttons">

  <button>Cancel</button>
  <button>Save</button>


  </div>
  

</div>
</>
  )
}

export default SettingPage