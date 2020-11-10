import React from 'react'
import './ThumbNailGrid.styles.css'
import Thumbnail from '../Thumbnail/ThumbNail.component'



const ThumbNailGrid = ({thumbnails, onClick}) => {
    return (
<div className='thumbnail-section'>
    {thumbnails.map((thumbnail, i) => (
         <Thumbnail 
         key={thumbnail.imgUrl}
         imgUrl={thumbnail.imgUrl}
         index={i}
         onClick={onClick}/>
    )
)}
</div>
    )
}

export default ThumbNailGrid


