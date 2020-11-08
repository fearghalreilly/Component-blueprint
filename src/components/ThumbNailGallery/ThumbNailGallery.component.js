import React, {useState} from 'react'
import './ThumbNailGallery.styles.css'
import ActiveThumbNailWindow from '../ActiveThumbNailWindow/ActiveThumbNailWindow.component'
import ThumbNailGrid from '../ThumbNailGrid/ThumbNailGrid.component'

const ThumbNailGallery = () => {
    return (
        <div className='gallery-section'>
        <ActiveThumbNailWindow />
        <ThumbNailGrid />
        </div>
    )
}

export default ThumbNailGallery