import React from "react";
import { twMerge } from "tw-merge";

const AsideListContainer = ({
  Icon = false,
  text,
  image = false,
  selected,
  indexAba,
  setIndex,
  className,
  iconClassName,
  noHidden
}) => {
  const handleClick = () => {
    if(setIndex && indexAba) setIndex(indexAba);
  }

  return (
    <li
      onClick={handleClick}
      className={twMerge(
        `flex w-full max-[640px]:justify-center items-center gap-4 cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 rounded-md pr-2 lg:pr-14 py-2 pl-2 flex-1 transition-all duration-200 ${className}`
      )}
    >
      {Icon ? (
        <Icon selected={selected} className={twMerge(`w-[1.2em] lg:w-[1.2em] text-primaryWhiteMode dark:text-primary ${iconClassName}`)} />
      ) : image ? (
        <img
          className="object-cover w-[1.4em] h-[1.4em] rounded-full"
          src={image}
        ></img>
      ) : null}
      <h3
        className={`${
          selected ? "font-bold text-[0.8em]" : "font-light text-[0.8em]"
        } ${noHidden ? "block" : "hidden lg:block" } min-w-fit`}
      >
        {text}
      </h3>
    </li>
  );
};

export default AsideListContainer;
