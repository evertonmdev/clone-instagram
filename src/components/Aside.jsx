import React, { useState } from 'react'

import LogoInsta from '../assets/logoInsta'
import HomeIcon from '../assets/icons/HomeIcon'
import AsideListContainer from './AsideListContainer'
import SearchIcon from '../assets/icons/SearchIcon'
import ExploreIcon from '../assets/icons/ExploreIcon'
import ReelsIcon from '../assets/icons/ReelsIcon'
import ChatIcon from '../assets/icons/ChatIcon'
import HearthIcon from '../assets/icons/HearthIcon'
import PlusIcon from '../assets/icons/PlusIcon'
import Threads from '../assets/icons/Threads'
import Burguer from '../assets/icons/Burguer'
import { twMerge } from 'tw-merge'

const Aside = ({className}) => {
    const [indexAbaAtual, setindexAbaAtual] = useState(0)

    return (
        <aside className={twMerge(`max-[640px]:fixed relative sm:h-full w-full sm:w-fit sm:flex flex-col items-start justify-between sm:pr-2  sm:pb-5 border-r border-white/20 px-2 py-2 sm:py-primaryMobileY md:py-primaryDesktopY ${className} bg-primary  bottom-0`)}>
            <div className='flex flex-col'>
                <div className='max-sm:hidden' >
                    <LogoInsta />
                </div>
                <ul className='flex sm:flex-col gap-3 '>
                    <AsideListContainer indexAba={0} setIndex={setindexAbaAtual} selected={indexAbaAtual == 0 ? true : false} Icon={HomeIcon} text={"Página Inicial"} />
                    <AsideListContainer indexAba={1} setIndex={setindexAbaAtual} selected={indexAbaAtual == 1 ? true : false} Icon={SearchIcon} className={"hidden sm:flex"} text={"Pesquisa"} />
                    <AsideListContainer indexAba={2} setIndex={setindexAbaAtual} selected={indexAbaAtual == 2 ? true : false} Icon={ExploreIcon} text={"Explorar"} />
                    <AsideListContainer indexAba={3} setIndex={setindexAbaAtual} selected={indexAbaAtual == 3 ? true : false} Icon={ReelsIcon} text={"Reels"} />
                    <AsideListContainer indexAba={4} setIndex={setindexAbaAtual} selected={indexAbaAtual == 4 ? true : false} Icon={ChatIcon} text={"Mensagens"} />
                    <AsideListContainer indexAba={5} setIndex={setindexAbaAtual} selected={indexAbaAtual == 5 ? true : false} Icon={HearthIcon} text={"Notificações"} />
                    <AsideListContainer indexAba={6} setIndex={setindexAbaAtual} selected={indexAbaAtual == 6 ? true : false} Icon={PlusIcon} text={"Criar"} />
                    <AsideListContainer className={"hidden sm:flex"} indexAba={7} setIndex={setindexAbaAtual} selected={indexAbaAtual == 7 ? true : false} image="https://i.pinimg.com/564x/33/13/8a/33138ae8dd1673758f1e03ed812ca08e.jpg" text={"Perfil"} />
                </ul>
            </div>

            <ul className='hidden sm:flex flex-col gap-1 w-full'>
                    <AsideListContainer className={"hidden xl:flex"} Icon={Threads} text={"Threads"} />
                    <AsideListContainer Icon={Burguer} text={"Mais"} />
            </ul>
        </aside>
    )
}

export default Aside