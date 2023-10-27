import React from 'react'
import ReactDOM  from 'react-dom'
import './Main.css'
import flats from '../../flats'
import Card from '../../components/card/Card'


const Main = (props) => {
 
  return (
    <div className='main'>{flats.map(flat => (
      <Card className='main-card' flat={flat} />
    ))}</div>
  )
}

export default Main