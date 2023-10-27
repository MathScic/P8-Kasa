import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

const Card = ({flat}) => {
  return (
    <Link to={`flat/${flat.id}`} >
      <p>{flat.title}</p>
      <img src={flat.cover} alt='' />
    </Link>
  )
}

export default Card