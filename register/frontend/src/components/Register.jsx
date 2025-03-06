import React from 'react';
import logo from '../assets/saylani_logo.png';
import Button from './Button';

const Register = (props) => {
  return (
    <div className='page'>
      <div className="page-content">
        <img src={logo} alt="logo_img" className="mb-4" />

        {/* Buttons Container */}
        <div className="button-container">
          <Button text={props.studentText} />
          <Button text={props.teacherText} />
        </div>
      </div>
    </div>
  );
};

export default Register;
