import React from 'react'
import './ActiveThumbNailWindow.styles.css'
import leftArrow from  '../../img/left-arrow.svg'
import rightArrow from  '../../img/right-arrow.svg'

const ActiveThumbNailWindow = ({ activeThumbnail, onClickL, onClickR  }) => {
    return (

   
<div className='active-thumbnail-section '>
    
<div  className='photothing' style={{ backgroundImage: `url(${activeThumbnail.imgUrl})`} }>
    <div  onClick={onClickL} style={{ backgroundImage: `url(${leftArrow})`} } className='arrow' id='arrow-left' />
    <div  onClick={onClickR} style={{ backgroundImage: `url(${rightArrow})`} } className='arrow' id='arrow-right' />
    </div>
   
</div>


    )

}

export default ActiveThumbNailWindow