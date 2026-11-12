import React from 'react'

const Button = (props) => {
  const {name,backgroundcolor,color} = props;
  return (
    <div>
      <button className='button' style={{ backgroundColor: backgroundcolor,color:color }}>{name}</button>
    </div>
  )
}

export default Button