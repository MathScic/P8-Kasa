import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Apropos.css'

const Apropos = () => {
  return (
      <div className='apropos'>
        <div className='apropos-container'>
          <p className='apropos-writing'>Fiabilité</p>
        </div>
        <div className='apropos-container'>
          <p className='apropos-writing'>Respect</p>
        </div>
        <div className='apropos-container'>
          <p className='apropos-writing'>Service</p>
        </div>
        <div className='apropos-container'>
          <p className='apropos-writing'>Sécurité</p>
        </div>
      </div>
  )
}

export default Apropos