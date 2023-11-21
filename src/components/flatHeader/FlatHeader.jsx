import React from 'react'
import './FlatHeader.css'
import PropTypes from 'prop-types'
import flats from '../../flats'

function CareScale({ scaleValue }) {
  const stars = [1, 2, 3, 4, 5]; 

  return (
    <div>
      {stars.map((rangeElem) => (
        <span key={rangeElem.toString()} className="fa-stack" style={{ fontSize: '1em' }}>
          <i className="fa fa-star fa-stack-2x" style={{ color: scaleValue >= rangeElem ? '#ff6060' : '#E3E3E3' }}></i>
          <i className="fa fa-star fa-stack-2x" style={{ color: 'gray', zIndex: -1 }}></i>
        </span>
      ))}
    </div>
  );
}


function AppartmentHeader(props) {
  return (
    <div className="flat-header">
      <div className="flat-title">
        <h1>{props.title}</h1>
        <h2>{props.location}</h2>
        <ul className='flat-tag'>
          <li className='flat-tag-flex'>{props.tag}</li>
        </ul>
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
            <CareScale scaleValue={props.rating} />
          </span>
        </div>
      </div>
    </div>
  );
}


export default AppartmentHeader
