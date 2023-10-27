import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Apropos.css'

const Apropos = (props) => {

  const [aproposContent, setAproposContent] = useState(false)
  const showContent = () => {
      setAproposContent(!aproposContent)
  }

  return (
      <div className='apropos'>
        <div className='apropos-container'>
          <p className='apropos-writing'>Fiabilité</p>
          
          <button className='apropos-button' >
            <p className=''><i class="fa-solid fa-chevron-down hidden" onClick={showContent}></i></p>
            {aproposContent &&<p className='apropos-button-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nesciunt.</p>}
          </button>

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