import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Apropos.css'
import Banner from '../../components/banner/Banner'
import terms from '../../terms'
import Collapse from '../../components/collapse/Collapse'

const Apropos = (props) => {


  return (
      <div>
        <Banner text=""/>
        <div className='term-container'>{terms.map((term) => (
          <Collapse key={term.name} term={term} name={term.name}/>
        ))}
      </div>
      </div>  
  )
}

export default Apropos