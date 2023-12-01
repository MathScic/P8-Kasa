import React from 'react'
import { Link } from 'react-router-dom'
import './Apropos.scss'
import Banner from '../../components/banner/Banner'
import terms from '../../terms'
import Collapse from '../../components/collapse/Collapse'

function Apropos() {

  return (
      <div>
        <Banner text=""/>
        <div className='term-description'>{terms.map((term) => (
          <Collapse className="flat-description" key={term.id} title={term.name} content={term.text}/>
        ))}
      </div>
      </div>  
  )
}



export default Apropos