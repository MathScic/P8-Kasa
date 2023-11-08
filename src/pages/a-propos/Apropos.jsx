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

          <section className={`apropos-button`}>
            <div className=''>
              <p className='apropos-writing'>Respect<i class={`fa-solid fa-chevron-down hidden ${isRotated ? 'rotated' : ''}`} onClick={showContent}></i></p>
              {aproposContent &&
              <p className='apropos-button-content'>La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation de voisinage entrainera une exclusion de notre plateforme.</p>}
            </div>
          </section>

          <section className={`apropos-button`}>
            <div className=''>
              <p className='apropos-writing'>Service<i class={`fa-solid fa-chevron-down hidden ${isRotated ? 'rotated' : ''}`} onClick={showContent}></i></p>
              {aproposContent &&
              <p className='apropos-button-content'>La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation de voisinage entrainera une exclusion de notre plateforme.</p>}
            </div>
          </section>

          <section className={`apropos-button`}>
            <div className=''>
              <p className='apropos-writing'>Sécurité<i class={`fa-solid fa-chevron-down hidden ${isRotated ? 'rotated' : ''}`} onClick={showContent}></i></p>
              {aproposContent &&
              <p className='apropos-button-content'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que vous les voyageurs, chaque logements correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
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