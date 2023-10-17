import React from 'react'
import './Flat.css'
import flats from '../../flats'
import FlatDescription from '../../components/flatDescription/FlatDescription'
import FlatImg from '../../components/flatImg/FlatImg'
import FlatHeader from '../../components/flatHeader/FlatHeader'

const Flat = (flats) => {

  return (
    <div className="flat-page">
      <FlatImg />
      <FlatHeader />
      <FlatDescription />
    </div>
  )
}

export default Flat

    {/** {flats.map((flat) => (
        <div key={flat.id}>
          <h1>{flat.title}</h1>
        </div>
      ))}*/} 