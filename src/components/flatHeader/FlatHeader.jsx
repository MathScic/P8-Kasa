import React from 'react'
import './FlatHeader.css'
import PropTypes from 'prop-types'
import flats from '../../flats'

 function AppartmentHeader(props) {
  return (
<div className="flat-header">
    <div className="flat-title">
      <h1>Crazy Loft au canal Saint martin </h1>
        <h2>{props.location}</h2>
        <div className="flat-tag-flex">
          <span>{props.tags}</span>
          <span>{props.tags}</span>
          <span>{props.tags}</span>
        </div>
          
    </div>
    <div className="flat-owner">
      <div className='flat-badge-flex'>
        <div>
          <span><h3>Alexandre</h3></span>
          <span><h3>Dumas</h3></span>
        </div>
        <div className="flat-owner-badge">{props.host}</div>
      </div>
        <div className="flat-owner-stars">
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-regular fa-star"></i></span>
          <span><i class="fa-regular fa-star"></i></span>
        </div>
    </div>
</div>
  )
}


export default AppartmentHeader
