import React, { useState } from "react";
import { twMerge } from "tw-merge";

import {
  ChatIcon,
  Burguer,
  ExploreIcon,
  HearthIcon,
  HomeIcon,
  PlusIcon,
  ReelsIcon,
  SearchIcon,
  Threads,
} from "../assets/icons";

import AsideListContainer from "./AsideListContainer";
import LogoInsta from "../assets/logoInsta";

const Aside = ({ className }) => {
  const [indexAbaAtual, setindexAbaAtual] = useState(0);

  return (
    <aside
      className={twMerge(
        `max-[640px]:fixed relative sm:h-full lg:w-full w-full sm:w-fit sm:flex flex-col items-start justify-between sm:pr-2  sm:pb-5 border-r border-white/20 px-2 py-2 sm:py-primaryMobileY md:py-primaryDesktopY ${className} bg-primary  bottom-0`
      )}
    >
      <div className="flex flex-col">
        <div className="max-sm:hidden">
          <LogoInsta />
        </div>
        <ul className="flex sm:flex-col gap-3 ">
          <AsideListContainer
            indexAba={0}
            setIndex={setindexAbaAtual}
            selected={indexAbaAtual == 0 ? true : false}
            Icon={HomeIcon}
            text={"Página Inicial"}
          />
          <AsideListContainer
            indexAba={1}
            setIndex={setindexAbaAtual}
            selected={indexAbaAtual == 1 ? true : false}
            Icon={SearchIcon}
            className={"hidden sm:flex"}
            text={"Pesquisa"}
          />
          <AsideListContainer
            indexAba={2}
            setIndex={setindexAbaAtual}
            selected={indexAbaAtual == 2 ? true : false}
            Icon={ExploreIcon}
            text={"Explorar"}
          />
          <AsideListContainer
            indexAba={3}
            setIndex={setindexAbaAtual}
            selected={indexAbaAtual == 3 ? true : false}
            Icon={ReelsIcon}
            text={"Reels"}
          />
          <AsideListContainer
            indexAba={4}
            setIndex={setindexAbaAtual}
            selected={indexAbaAtual == 4 ? true : false}
            Icon={ChatIcon}
            text={"Mensagens"}
          />
          <AsideListContainer
            indexAba={5}
            setIndex={setindexAbaAtual}
            selected={indexAbaAtual == 5 ? true : false}
            Icon={HearthIcon}
            text={"Notificações"}
          />
          <AsideListContainer
            indexAba={6}
            setIndex={setindexAbaAtual}
            selected={indexAbaAtual == 6 ? true : false}
            Icon={PlusIcon}
            text={"Criar"}
          />
          <AsideListContainer
            className={"hidden sm:flex"}
            indexAba={7}
            setIndex={setindexAbaAtual}
            selected={indexAbaAtual == 7 ? true : false}
            image="https://avatars.githubusercontent.com/u/122039415?v=4"
            text={"Perfil"}
          />
        </ul>
      </div>

      <ul className="hidden sm:flex flex-col gap-1 w-full">
        <AsideListContainer
          className={"hidden xl:flex"}
          Icon={Threads}
          text={"Threads"}
        />
        <AsideListContainer Icon={Burguer} text={"Mais"} />
      </ul>
    </aside>
  );
};

export default Aside;
