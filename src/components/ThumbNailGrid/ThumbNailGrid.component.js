import React from 'react'
import './ThumbNailGrid.styles.css'
import Thumbnail from '../Thumbnail/ThumbNail.component'


const ThumbNailGrid = () => {
    return (
<div className='thumbnail-section'>
<Thumbnail  />
<Thumbnail  />
<Thumbnail  />
<Thumbnail  />
<Thumbnail  />
<Thumbnail  />
</div>
    )
}

export default ThumbNailGrid