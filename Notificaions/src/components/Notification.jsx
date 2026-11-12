import React from 'react'

const Notification = (props) => {
    const {msg,backgroundcolor,image} = props
  return (
    <div className='noti-card' style={{backgroundColor:backgroundcolor}}>
        <img src={image} className='image'/>
        <p className='noti'>{msg}</p>
    </div>
  )
}

export default Notification