import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Error.scss'

const Error = () => {
  return (
    <div>
        <div className='error-logo'>
            <img src="assets/Error404.png" alt="erreur404" /> 
        </div>
        <div className='error-p'>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div className='error-link'>
            <Link to="/">
                Retournez sur la page d'accueil
            </Link>
        </div>
    </div>   
  )
}



export default Error