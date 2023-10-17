import React from 'react'
import './FlatImg.css'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'


function AppartmentImg(props) {

    return (
    <div>   
        <img className='flat-img' src={props.cover} alt={props.title} />
    </div>
    )
}

export default AppartmentImg