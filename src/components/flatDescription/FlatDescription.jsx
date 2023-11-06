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
            <section className='flat-description'>
                <div className="">
                    <p className='description-title'>{props.title}<i class="fa-solid fa-chevron-down" onClick={showContent}></i></p>
                    {show &&<div className='description-content'>{props.content}</div>}   
                </div>
            </section>
    )

}

export default AppartmentDescription