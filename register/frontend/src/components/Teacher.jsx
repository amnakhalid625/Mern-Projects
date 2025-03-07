import React from 'react'
import logo from '../assets/saylani_logo.png';


const Teacher = () => {
  return (
    <div className='page'>
        <div className='page-content'>
            <img src={logo} alt="" />
            <form action="" className='form-content'>
                <h1>Register Form</h1>
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
               <button className='submit-button'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Teacher