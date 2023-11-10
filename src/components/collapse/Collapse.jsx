import React from 'react'
import './Collapse.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Collapse(props) {

    const [show, setShow] = useState(false)
    const showContent = () => {
        setShow(!show) 
    }

    return (
            <section className='flat-description'>
                <div className='collapse-container'>
                    <p className='description-title'>{props.title}<i className='fa-solid fa-chevron-up' onClick={showContent}></i></p>
                    {show &&<div className='description-content'>{props.content}</div>}   
                </div>
            </section>
    )

}

export default Collapse