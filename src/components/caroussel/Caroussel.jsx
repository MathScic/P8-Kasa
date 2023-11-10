import React from 'react'
import './Caroussel.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

function FlatImg({pictures}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        const newIndex = currentIndex +1;

        if (newIndex === pictures.length) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(newIndex)
        }
    }
    
    const prevSlide = () => {
        const newIndex = currentIndex -1 

        if (newIndex === -1) {
            setCurrentIndex(pictures.length -1)
        } else {
            setCurrentIndex(newIndex)
        }
    } 

    /**si une img alors pas de arrow et pagination */
    

    return (
    <div>  
        <img className='flat-img' src={pictures[currentIndex]} alt="" onClick={nextSlide} />
        {pictures.length > 1 && 
        <>
        <div className='arrow'>
            <i class="fa-solid fa-chevron-left arrow-left" onClick={prevSlide}></i> 
            <i class="fa-solid fa-chevron-right arrow-right" onClick={nextSlide}></i>
        </div>
        <div className='pagination'>
            <p>{currentIndex +1}/{pictures.length}</p>
        </div> 
        </> }
    </div>
    )
}

export default FlatImg