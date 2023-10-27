import React from 'react'
import './FlatImg.css'
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
          /**Fais avancer l'index d'img de 1 ce qui permet de faire suivant **/
        /** curentIndex ++  
         * if currentIndex === 5 (pictures.lenght) = 0 **/
    }
    
    const prevSlide = () => {
        const newIndex = currentIndex -1 

        if (newIndex === -1) {
            setCurrentIndex(pictures.length -1)
        } else {
            setCurrentIndex(newIndex)
        }
         /**Fais reculer l'index d'img de 1 ce qui permet de faire précédent **/
       /** curentIndex --  
         * if currentIndex === -1 (pictures.lenght) = 4 **/
    } 

    /**si une img alors pas de arrow et pagination */


    return (
    <div>  
        <img className='flat-img' src={pictures[currentIndex]} alt="" onClick={nextSlide} />
        
        <div className='arrow'>
            <i class="fa-solid fa-chevron-left arrow-left" onClick={prevSlide}></i> 
            <i class="fa-solid fa-chevron-right arrow-right" onClick={nextSlide}></i>
        </div>
        <div className='pagination'>
            <p>{currentIndex +1}/{pictures.length}</p>
        </div>
               
    </div>
    )
}

export default FlatImg