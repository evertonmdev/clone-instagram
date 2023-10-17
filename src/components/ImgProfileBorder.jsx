import React from 'react'
import { twMerge } from 'tw-merge'

const ImgProfileBorder = ({src, className}) => {
  return (
    <div className={twMerge(`w-12 h-12 NewStories relative flex justify-center items-center p-[2px] ${className} `)}>
        <img src={src} className={`w-full h-full rounded-full object-cover relative`} />
    </div>
  )
}

export default ImgProfileBorder