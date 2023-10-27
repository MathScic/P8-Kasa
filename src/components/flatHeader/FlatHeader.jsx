import React from 'react'
import './FlatHeader.css'
import PropTypes from 'prop-types'
import flats from '../../flats'

 function AppartmentHeader(props) {
  return (
<div className="flat-header">
    <div className="flat-title">
      <h1>{props.title}</h1>
        <h2>{props.location}</h2>
        <div className="flat-tag-flex">
          <span>{props.tag}</span>
        </div>
        <div className="flat-tag-flex">
          <span>{props.tag}</span>
        </div>
          
    </div>
    <div className="flat-owner">
      <div className='flat-badge-flex'>
        <div>
          <span><h3>{props.owner}</h3></span>
        </div>
        <div className="flat-owner-badge"><img src={props.ownerPicture} alt="" /></div>
      </div>
        <div className="flat-owner-stars">
          <span>
            <i class="fa-solid fa-star">{props.rating}</i>
          </span>
          
          
        </div>
    </div>
</div>
  )
}


export default AppartmentHeader
