import React from 'react'
import ReactDOM  from 'react-dom'
import './Main.css'
import flats from '../../flats'
import Card from '../../components/card/Card'
import FlatImg from '../../components/flatImg/FlatImg'
import jsonData from '../../flats'

const Main = (props) => {
 
  return (
    <div className='main'>{flats.map(flat => (
      <Card flat={flat} />
    ))}</div>
    



  )
}




export default Main