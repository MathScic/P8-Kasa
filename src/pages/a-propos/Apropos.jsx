import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Apropos.css'

const Apropos = () => {

  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
      <div className='apropos'>
        <div className='apropos-container'>
          <p className='apropos-writing'>Fiabilité</p>
          <button className='apropos-button' onClick={toggleCollapse} >
            <i className={`fa-solid fa-chevron-${isCollapsed? 'up' : 'down'}`}></i>
          </button>
          {isCollapsed && (
            <div className='apropos-content'>
              <p>Contenue du Fiabilité</p>
            </div>
          )}
        </div>

        <div className='apropos-container'>
          <p className='apropos-writing'>Respect</p>
          <button className='apropos-button'>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className='apropos-container'>
          <p className='apropos-writing'>Service</p>
          <button className='apropos-button'>
            <i class="fa-solid fa-chevron-down"></i>
          </button>        
        </div>

        <div className='apropos-container'>
          <p className='apropos-writing'>Sécurité</p>
          <button className='apropos-button'>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
  )
}

export default Apropos