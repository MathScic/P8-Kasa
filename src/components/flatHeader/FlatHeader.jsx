import React from 'react'
import './FlatHeader.css'
import PropTypes from 'prop-types'

 function AppartmentHeader() {
  return (
<div className="flat-header">
    <div className="flat-title">
      <h1>Crazy Loft au canal Saint martin </h1>
        <h2>Paris IDF</h2>
        <div className="flat-tag-flex">
          <span>Cozy</span>
          <span>Canal</span>
          <span>Paris 10</span>
        </div>
          
    </div>
    <div className="flat-owner">
      <div className='flat-badge-flex'>
        <div>
          <span><h3>Alexandre</h3></span>
          <span><h3>Dumas</h3></span>
        </div>
        <div className="flat-owner-badge"></div>
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
