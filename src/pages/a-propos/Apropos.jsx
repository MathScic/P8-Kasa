import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Apropos.css'
import Banner from '../../components/banner/Banner'

const Apropos = (props) => {

  const [aproposContent, setAproposContent] = useState(false)
  const [isRotated, setRotated] = useState(false)
  const showContent = () => {
      setAproposContent(!aproposContent)
      setRotated(!isRotated)
  }

  return (
      <div>
        <Banner />
      <div className=''>
          <section className={`apropos-button`}>
            <div className=''>
              <p className='apropos-writing'>Fiabilité<i class={`fa-solid fa-chevron-down hidden ${isRotated ? 'rotated' : ''}`} onClick={showContent}></i></p>
              {aproposContent &&
              <p className='apropos-button-content'>Les annonces postées sur Kasa garantissent une fiabilité totle. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos equipes.</p>}
            </div>
          </section>

       {/*<div className='apropos-container'>
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
        </div>*/}
      </div>
      </div>  
  )
}

export default Apropos