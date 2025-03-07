import React from 'react'
const Button = (props) => {
  return (
    <div>
        <button className='buttons' >
            {props.text}
        </button>
    </div>
  )
}
export default Button