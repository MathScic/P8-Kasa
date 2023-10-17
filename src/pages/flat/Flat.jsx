import React from 'react'
import './Flat.css'
import flats from '../../flats'
import FlatDescription from '../../components/flatDescription/FlatDescription'
import FlatImg from '../../components/flatImg/FlatImg'
import FlatHeader from '../../components/flatHeader/FlatHeader'
import { useLocation} from 'react-router-dom'

const Flat = (flats) => {

  const location = useLocation()
  console.log('location',location);

  return (
    <div className="flat-page">
      <FlatImg />
      <FlatHeader />
      <FlatDescription />
    </div>
  )
}

export default Flat

