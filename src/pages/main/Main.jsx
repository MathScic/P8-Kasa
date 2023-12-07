import React from 'react'
import ReactDOM  from 'react-dom'
import './Main.scss'
import flats from '../../flats'
import Card from '../../components/card/Card'
import Banner from '../../components/banner/Banner'


const Main = (props) => {
 
  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" image="../assets/accueil.png"/>
    <div className='main'>{flats.map(flat => (
      <Card className='main-card' key={flat.id} flat={flat} />
    ))}</div>
     </div>
  )
}

export default Main