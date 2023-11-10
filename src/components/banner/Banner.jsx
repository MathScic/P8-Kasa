import React from 'react'
import './Banner.css'


const Banner = (props) => {
  return (
    <div className='banner'>
        <h1 className='banner-title'>{props.text}</h1>
    </div>
  )
}

export default Banner