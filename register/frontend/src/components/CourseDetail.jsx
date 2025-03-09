import React from 'react';
import Navbar from './Navbar';
import courseImg from '../assets/card-img.png';
import CourseCard from './CourseCard';
import SecondCard from './SecondCard';

const CourseDetail = () => {
  return (
    <div className="course-detail">
      <Navbar />
      <h1>Course Details</h1>
      <div className="course-content">
        <div className="course-image">
          <img src={courseImg} alt="course-card-img" />
        </div>
        <div className="course-text">
          <p>Web development</p>
          <p>
            Data Analysis, Data Management, Data Mining, Data Model, Data Visualization, Extract, Power BI, SQL
            Data Analysis, Data Management, Data Mining, Data Model, Data Visualization, Extract, Transform, Load, Microsoft Excel, Power BI, SQL
            Data Analysis, Data Management, Data Mining, Data Model, Data Visualization, Extract, Transform, Load, Microsoft Excel, Power BI, SQL
          </p>
          <button>Enroll For Free</button>
        </div>
      </div>
      <div className="other-courses">
        <h1>Other Courses</h1>
        <div className="course-cards">
       <SecondCard />
       <SecondCard />
       <SecondCard />

        </div>
      </div>
    </div>
  );
};
export default CourseDetail;