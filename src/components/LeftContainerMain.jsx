import React from 'react'

const LeftContainerMain = ({children}) => {
  return (
    <div className='flex w-full min-h-full justify-center px-3 lg:px-0 lg:mx-5'>
        <div className="w-full min-h-fit flex items-center flex-col max-w-[630px]">
            {children}
        </div>
    </div>
  )
}

export default LeftContainerMain