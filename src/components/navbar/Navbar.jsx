import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <img src='../assets/logo.png' alt='logo' />
        </div>
        <NavLink to="/" activeClassName="active">Accueil</NavLink>
        <NavLink to= "/apropos" activeClassName="active">A propos</NavLink>
    </nav>
  )
}

export default Navbar