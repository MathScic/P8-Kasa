import React from 'react'
import './FlatImg.css'
import { Link, useState } from 'react-router-dom'
import PropTypes from 'prop-types'
import flat from '../../flats'


function FlatImg(props) {
    console.log(props);

    return (
    <div>   
        <img className='flat-img' src='' alt='' />
    </div>
    )
}

export default FlatImg