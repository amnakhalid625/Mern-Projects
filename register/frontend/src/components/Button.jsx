import React from 'react'
const Button = ({text,onClick}) => {
  return (
    <div>
        <button className='buttons' onClick={onClick}>
          
            {text}
        </button>
    </div>
  )
}
export default Button