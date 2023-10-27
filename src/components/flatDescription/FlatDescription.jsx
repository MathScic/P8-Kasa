import React from 'react'
import './FlatDescription.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

function AppartmentDescription(props) {

    const [show, setShow] = useState(false)
    const showContent = () => {
        setShow(!show) 
    }

    return (
    <div className='description-equipement'>
        <div className="flat-description">
            <p className='description-title'>{props.title}<i class="fa-solid fa-chevron-down" onClick={showContent}></i></p>
            {show &&<p className='description-content hidden'>{props.content}</p>}   
        </div>
    </div>
    )

}

export default AppartmentDescription