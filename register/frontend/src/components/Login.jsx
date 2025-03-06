import React from 'react'
import logo from '../assets/saylani_logo.png';


const Login = () => {
  return (
    <div className='page'> 
      <div className='page-content'>
        <img src={logo} alt="" />

        <form action="" className='form-content'>
          <h1>Login Form</h1>
          <input type="email" name="email" id="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button type="submit" className='submit-button'>Login</button>
        </form>
      </div>
      
       </div>
  )
}

export default Login