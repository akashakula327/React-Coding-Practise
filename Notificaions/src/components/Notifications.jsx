import React from 'react'
import Notification from './Notification.jsx'
import '../index.css'

const Notifications = () => {
  return (
    <div>
        <h2 className='noti-heading'>Notifications</h2>
        <Notification msg="Information message" backgroundcolor="#0b69ff" image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
        <Notification msg="Success message" backgroundcolor="#2dca73" image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
        <Notification msg="Warning message"backgroundcolor="#ffb800" image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
        <Notification msg="Error message" backgroundcolor="#ff0b37" image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/>
    </div>
  )
}

export default Notifications