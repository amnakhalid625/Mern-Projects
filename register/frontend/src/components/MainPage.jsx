import React from 'react'
import Navbar from './Navbar'
import homeImg from '../assets/home-img.png'
import CourseCard from './CourseCard'
import Contact from './Contact'
const MainPage = () => {
  return (
    <>
    <Navbar />
    <div className='main-wrapper'>
<div className="left-content">
  <h1>Learn without <span>limits </span></h1>
  <p>Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
<button>Get Started</button>
</div>
<div className="right-img">
<img src={homeImg} alt="" />
</div>
</div>

<h1 className='card-head'>Start learning with free courses</h1>
<p className='card-desc'>Explore free online courses.</p>
<div className="course-card">
    
    <CourseCard />
    <CourseCard />
    <CourseCard />



    </div>

    
    <div className="register-side">
        <h1>Register For Free Courses.</h1>
        <div className="register-button">
        <button>Register</button>
        </div>
    </div>

    <Contact />

    </>
  )
}

export default MainPage