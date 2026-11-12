import React from 'react'
import '../index.css'

const TechnologyCards = (props) => {
    const {cardsList} = props;
    const {id,title,description,imgUrl,className} = cardsList;
  return (
    <div className={className} id={id}>
        <h1 className='title'>{title}</h1>
        <p className='description'>{description}</p>
        <img src={imgUrl} className='image'/>
    </div>
  )
}

export default TechnologyCards