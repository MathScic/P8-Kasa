import React, { useEffect, useState } from 'react'
import  {  useNavigate, useParams } from 'react-router-dom'
import './Flat.css'
import flats from '../../flats'
import Collapse from '../../components/collapse/Collapse'
import Caroussel from '../../components/caroussel/Caroussel'
import FlatHeader from '../../components/flatHeader/FlatHeader'
import Error from '../../components/error/Error'

function Flat() {
  
  const { flatId } = useParams()

  const flat = flats.find((flat) => flat.id === flatId)
  

 return (
  <>
  {flat ? <>
    <div className="flat-page">
      <Caroussel pictures={flat.pictures} />
      <FlatHeader title={flat.title} 
                  location={flat.location} 
                  tag={flat.tags.map((tag, index) => (<li key={index}>{tag}</li>))} 
                  owner={flat.host.name} 
                  ownerPicture={flat.host.picture}
                  rating={flat.rating}/>
      <section className='description-equipement'>
      <Collapse title={"Description"} content={flat.description} row={true}/> 
      <Collapse title={"Equipements"} row={true} content={flat.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
    
  ))} />
      </section>
    </div>
    </> : <span><Error /></span>}
  </>
 )
}

export default Flat

