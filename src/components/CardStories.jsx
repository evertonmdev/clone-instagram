import React from 'react'
import ImgProfileBorder from './ImgProfileBorder'

const CardStories = ({image, name}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-1 w-fit' >
        <ImgProfileBorder src={image} />
        <span className='text-[0.5em] text-ellipsis whitespace-nowrap'>{name}</span>
    </div>
  )
}

export default CardStories