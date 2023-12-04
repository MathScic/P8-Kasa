import React from 'react'
import './Collapse2.scss'
import { useState } from 'react'
import terms from '../../terms'
import PropTypes from 'prop-types'

function Collapse(props) {

    const [show, setShow] = useState(false)
    const showContent = () => {
        setShow(!show) 
    }

    return (

    <section className={`flat-description ${props.row ? "row" : ""}`}>
        <div className="collapse-container ">
            <p className='description-title'>{props.title}<i className={`fa-solid fa-chevron-up ${show ? "turn" : ""}`} onClick={showContent}></i></p>
            {show &&<div className={`description-content ${show ? "" : "collapsed"}`}>{props.content}</div>} 
        </div>
    </section>

    )

}

export default Collapse