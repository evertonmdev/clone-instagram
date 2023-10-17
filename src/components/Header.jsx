import React from 'react'
import LogoInsta from '../assets/logoInsta'
import HearthIcon from '../assets/icons/HearthIcon'

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center gap-5 px-2 sm:hidden pt-primaryMobileY">
        <LogoInsta />
        <div className="flex flex-1 relative justify-start gap-3 bg-white/10 rounded-lg px-3 items-center h-10 ">
        <input className="w-full h-full absolute bg-transparent outline-none" placeholder={"Pesquisar"} />
        </div>
        <HearthIcon className={"w-7 h-7"} />
    </header>
  )
}

export default Header