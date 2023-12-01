import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <img src='assets/logo.png' alt='logo' />
        </div>
          <Link to="/">Accueil</Link>
          <Link to= "/apropos">A propos</Link>
    </nav>
  )
}

export default Navbar