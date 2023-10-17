import React from 'react'
import './FlatDescription.css'
import PropTypes from 'prop-types'

function AppartmentDescription(props) {
    return (
        <div className='description-equipement'>
        <div className="flat-description">
            <p className='description-title'>Description<i class="fa-solid fa-chevron-down"></i></p>
            <p className='description-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, soluta iusto eligendi dolores eaque pariatur, magnam voluptatem incidunt suscipit consequatur veritatis delectus adipisci dolorem molestiae. Fugit, eveniet animi voluptatum repudiandae repellat esse natus. Omnis, aspernatur adipisci! Reiciendis accusantium modi debitis sequi, natus vitae quaerat magnam, voluptates eaque, omnis corrupti minima!</p>
        </div>
    
        <div className="flat-equipement">
            <p className='equipement-title'>Equipement<i class="fa-solid fa-chevron-down"></i></p>
            <p className='equipement-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, soluta iusto eligendi dolores eaque pariatur, magnam voluptatem incidunt suscipit consequatur veritatis delectus adipisci dolorem molestiae. Fugit, eveniet animi voluptatum repudiandae repellat esse natus. Omnis, aspernatur adipisci! Reiciendis accusantium modi debitis sequi, natus vitae quaerat magnam, voluptates eaque, omnis corrupti minima!</p>
        </div>
      </div>
    )

}

export default AppartmentDescription