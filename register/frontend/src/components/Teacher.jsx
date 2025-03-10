import React, { useState } from 'react'
import logo from '../assets/saylani_logo.png';


const Teacher = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData);
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });


  const handleInput = () => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })

  }





  return (
    <div className='page'>
      <div className='page-content'>
        <img src={logo} alt="" />
        <form action="" className='form-content' onSubmit={handleSubmit}>
          <h1>Register Form</h1>
          <input type="text" placeholder='Username' value={formData.name} onChange={handleInput} />
          <input type="email" placeholder='Email' value={formData.email} onChange={handleInput} />
          <input type="password" placeholder='Password' value={formData.password} onChange={handleInput} />
          <button className='submit-button' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Teacher