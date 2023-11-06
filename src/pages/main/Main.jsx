import React from 'react'
import ReactDOM  from 'react-dom'
import './Main.css'
import flats from '../../flats'
import Card from '../../components/card/Card'
import Banner from '../../components/banner/Banner'


const Main = (props) => {
 
  return (
    <div>
      <Banner />
    <div className='main'>{flats.map(flat => (
      <Card className='main-card' flat={flat} />
    ))}</div>
     </div>
  )
}

export default Main