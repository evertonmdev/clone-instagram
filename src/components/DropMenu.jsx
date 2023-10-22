import { Menu } from "@headlessui/react";
import React from "react";
import AsideListContainer from "./AsideListContainer";
import { ActivityIcon, AlertIcon, ConfigIcon, MoonIcon } from "../assets/icons";
import SaveIcon from "../assets/icons/SaveIcon";

const DropMenu = ({ buttonComponent }) => {
  const SwitchTheme = () => document.body.classList.toggle("dark");

  return (
    <Menu as={"div"} className={"w-full"}>
      <Menu.Button className={"w-full"}>{buttonComponent}</Menu.Button>
      <Menu.Items
        className={
          "flex flex-col gap-2 left-10 bottom-0 lg:left-0  lg:bottom-10 absolute bg-white dark:bg-neutral-800 min-w-[200px] w-[120%] drop-shadow-lg rounded-md divide-y-4 divide-white/10"
        }
      >
        <div className="flex flex-col gap-2 p-2">
          <Menu.Item>
            {({ active }) => (
              <AsideListContainer
                className={"gap-2 text-xs"}
                selected={active}
                text={"Configurações"}
                Icon={ConfigIcon}
                iconClassName={"w-[1.3em] h-[1.3em]"}
                noHidden={true}
              />
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <AsideListContainer
                className={"gap-2 text-xs"}
                selected={active}
                text={"Sua atividade"}
                Icon={ActivityIcon}
                iconClassName={"w-[1.3em] h-[1.3em]"}
                noHidden={true}
              />
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <AsideListContainer
                className={"gap-2 text-xs"}
                selected={active}
                text={"Salvos"}
                Icon={SaveIcon}
                iconClassName={"w-[1.3em] h-[1.3em]"}
                noHidden={true}
              />
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <AsideListContainer
                className={"gap-2 text-xs"}
                indexAba={10}
                setIndex={SwitchTheme}
                selected={active}
                text={"Alternar modo"}
                Icon={MoonIcon}
                iconClassName={"w-[1.3em] h-[1.3em]"}
                noHidden={true}
              />
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <AsideListContainer
                className={"gap-2 text-xs"}
                selected={active}
                text={"Relatar um problema"}
                Icon={AlertIcon}
                iconClassName={"w-[1.3em] h-[1.3em]"}
                noHidden={true}
              />
            )}
          </Menu.Item>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <Menu.Item>
            {({ active }) => (
              <AsideListContainer
                className={"gap-2 text-xs"}
                selected={active}
                text={"Trocar de conta"}
                noHidden={true}
              />
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <AsideListContainer
                className={"gap-2 text-xs"}
                selected={active}
                text={"Sair"}
                noHidden={true}
              />
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default DropMenu;
