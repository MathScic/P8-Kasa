import React, { useState } from 'react'
import './Flat.css'
import flats from '../../flats'
import FlatDescription from '../../components/flatDescription/FlatDescription'
import FlatImg from '../../components/flatImg/FlatImg'
import FlatHeader from '../../components/flatHeader/FlatHeader'


function Flat() {

  return (
    <div className="flat-page">
      <FlatImg />
      <FlatHeader />
      <FlatDescription />
    </div>
  )
}


export default Flat

