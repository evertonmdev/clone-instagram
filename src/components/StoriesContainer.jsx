import React, { useRef, useState, useContext } from "react";
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from "lucide-react";

import CardStories from "./CardStories";
import { Context } from "../Context";

const StoriesContainer = () => {
  const { users, isLoaded } = useContext(Context);
  const [valorScroll, setValorScroll] = useState(0);

  const ScrollToLeft = () => {
    setValorScroll(valorScroll + 250);
    scrollRef.current.scroll({
      left: valorScroll,
      behavior: "smooth",
    });
  };

  const ScrollToRight = () => {
    if (valorScroll < 50) setValorScroll(valorScroll - 250);
    scrollRef.current.scroll({
      left: valorScroll,
      behavior: "smooth",
    });
  };

  const scrollRef = useRef();

  return (
    <div className="w-full h-fit relative flex justify-center items-center lg:px-10 lg:pt-2 pt-primaryMobileY">
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto flex justify-start items-center gap-3 HiddenScroller"
      >
        {isLoaded ? (
          users.map((e, index) => {
            return <CardStories key={index} image={e.profileImage} name={e.nome} />;
          })
        ) : (
          <h3 className="text-center w-full animate-pulse">Carregando...</h3>
        )}
      </div>
      {valorScroll > 0 ? (
        <button
          onClick={ScrollToRight}
          className="absolute left-10 hidden lg:block p-2 cursor-pointer"
        >
          <ArrowLeftCircleIcon />
        </button>
      ) : null}
      <button
        onClick={ScrollToLeft}
        className="absolute right-10 hidden lg:block p-2 cursor-pointer"
      >
        <ArrowRightCircleIcon />
      </button>
    </div>
  );
};

export default StoriesContainer;
