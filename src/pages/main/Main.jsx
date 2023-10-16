import React from 'react'
import ReactDOM  from 'react-dom'
import './Main.css'
import flats from '../../flats'
import Card from '../../components/card/Card'


const Main = () => {

  return (
    <div className='main'>{flats.map(flat => (
      <Card flat={flat} />
    ))}</div>
  )
}




export default Main