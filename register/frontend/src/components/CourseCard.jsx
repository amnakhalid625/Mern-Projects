import React from "react";
import { Link } from "react-router-dom";
import cardImg from "../assets/card-img.png";

const CourseCard = () => {
  return (
    <div className="card">
      <Link to="#">
        <img src={cardImg} alt="Course Thumbnail" />
      </Link>
      <div className="card-content">
        <Link to="#">
          <h4>Web Development</h4>
          <p>
            Data Analysis, Data Management, Data Mining, Data Modeling, Data
            Visualization, Extract, Transform, Load, Microsoft Excel, Power BI, SQL
          </p>
          <p>Beginner | Professional Certificate | 3-6 Months</p>
        </Link>
      </div>
    </div>
  );
};
export default CourseCard;
