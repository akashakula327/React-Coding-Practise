import React from 'react'
import Button from './Button.jsx'
import '../index.css'

const Home = () => {
  return (
    <div className='home-background'>
        <h1 className='heading'>Social Buttons</h1>
        <div className='row'>
            <Button name="like" backgroundcolor="#eab308" color="black"/>
            <Button name="comment" backgroundcolor="#ffffff" color="black"/>
            <Button name="Share" backgroundcolor="#1d4ed8" color="black"/>
        </div>
    </div>
  )
}

export default Home