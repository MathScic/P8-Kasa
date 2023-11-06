import React from 'react'
import './FlatHeader.css'
import PropTypes from 'prop-types'
import flats from '../../flats'

 function AppartmentHeader(props) {

  function renderStars(rating) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    }
    return stars;
  }

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
            <i class="fa-solid fa-star">{renderStars(props.rating)}</i>
          </span>
        </div>
    </div>
</div>
  )
}


export default AppartmentHeader
