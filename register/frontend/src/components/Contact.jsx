import React from 'react'
import message from '../assets/Message.png'

const Contact = () => {
  return (
    <>
      <h1 className='contact-heading'>Contact Us</h1>

      <div className='contact'>
        <div className="contact-img">
          <img src={message} alt="" />
        </div>
        <div className="contact-form">

          <input type="email" placeholder='email' />
          <input type="text" placeholder='subject' />
          <button type='submit'>Submit</button>

        </div>
      </div>
    </>
  )
}

export default Contact