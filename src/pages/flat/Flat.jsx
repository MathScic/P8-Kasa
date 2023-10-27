import React, { useState } from 'react'
import  {  useNavigate, useParams } from 'react-router-dom'
import './Flat.css'
import flats from '../../flats'
import Collapse from '../../components/flatDescription/FlatDescription'
import FlatImg from '../../components/flatImg/FlatImg'
import FlatHeader from '../../components/flatHeader/FlatHeader'


function Flat() {

  const navigate = useNavigate()  /** Etape 9, id error **/

  const { flatId } = useParams()
  const flat = flats.find((flat) => flat.id === flatId)
  const equipmentList = flat.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ))

  return (
    <div className="flat-page">
      <FlatImg pictures={flat.pictures} />
      <FlatHeader title={flat.title} 
                  location={flat.location} 
                  tag={flat.tags} 
                  owner={flat.host.name} 
                  ownerPicture={flat.host.picture}
                  rating={flat.rating}/>
      <Collapse title={"Description"} content={flat.description} /> 
      <Collapse title={"Equipement"} content={equipmentList} />
    </div>
  )
}

export default Flat

