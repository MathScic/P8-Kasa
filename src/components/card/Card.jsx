import React from 'react'
import './Card.css'
import Appartment from './Appartment.jsx'


const Card = () => {
  return (
    <div className='grid'>
      <Appartment />
      <Appartment />
      <Appartment />
      <Appartment />
      <Appartment />
      <Appartment />
    </div>
  )
}

export default Card