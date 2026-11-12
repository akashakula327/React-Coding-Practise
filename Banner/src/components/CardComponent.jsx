import React from 'react'
import '../index.css'

const CardComponent = (props) => {
    const {bannerCardsList} = props;
    const {id,headerText,description,className} = bannerCardsList;

  return (
    <div className={className} id={id}>
        <div>
        <h1 className='header-text'>{headerText}</h1>
        <p className='description'>{description}</p>
        <button className='button'>Show More</button>
        </div>
    </div>
  )
}

export default CardComponent