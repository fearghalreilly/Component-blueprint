import React from 'react'
import './ActiveThumbNailWindow.styles.css'

const ActiveThumbNailWindow = ({activeThumbnail}) => {
    return (

   
<div className='active-thumbnail-section'>
    <img src={activeThumbnail.imgUrl}  /> 
</div>


    )

}

export default ActiveThumbNailWindow