import React, { useState } from 'react';
import logo from '../assets/saylani_logo.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
const[showForm,setShowForm]=useState(false)
const navigate = useNavigate();


const handleClick=()=>{
console.log("Button clicked, showForm:", !showForm); 
setShowForm(!showForm);
navigate('/teacher')
  }

  return (
    <div className='page'>
      <div className="page-content">
        <img src={logo} alt="logo_img" className="mb-4" />

        <div className="button-container">
          <Button text={ showForm ? 'Show':props.studentText}
          onClick={handleClick}
            />
          <Button text={props.teacherText}
          onClick={handleClick}
          />

        </div>
      </div>
    </div>
  );
};

export default Register;
