import React from 'react'
import './Card.css'

const Card = ({flat}) => {
  return (
    <div>
      <p>{flat.title}</p>
      <img src={flat.cover} alt='' />
    </div>
  )
}

export default Card