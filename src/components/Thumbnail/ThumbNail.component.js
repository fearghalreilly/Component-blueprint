import React from 'react'
import './ThumbNail.styles.css'

const ThumbNail = ({imgUrl, index, onClick}) => {
    return(
        <div className='thumbnail'>
            <img src={imgUrl} data-index={index} onClick={onClick} />
        </div>
        
    )
}

export default ThumbNail