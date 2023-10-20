import React, { Suspense }  from "react";
import { MoreHorizontal, Smile } from "lucide-react";

import ImgProfileBorder from "./ImgProfileBorder";
import SaveIcon from "../assets/icons/SaveIcon";
import ShareIcon from "../assets/icons/ShareIcon";
import ChatIconPost from "../assets/icons/ChatIconPost";
import HearthPostIcon from "../assets/icons/HearthPostIcon";

function FallbackContainer() {
  return (
    <div className="w-[530px] h-[630px] bg-white/5" />
  )
}

const PostCard = ({
  profileImage,
  nome,
  tempoPostagem,
  musicaTitle,
  imagePost,
  comentarioName
}) => {
  return (
    <article className="flex min-h-fit pb-4 justify-center flex-col gap-2 py-primaryDesktopY">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 justify-center items-center">
          <ImgProfileBorder className={"w-10 h-10"} src={profileImage} />
          <div className="leading-4">
            <p>
              {nome} <span className="text-primary/50">• {tempoPostagem}</span>
            </p>
            <p className="text-primary/70 font-extralight">{musicaTitle}</p>
          </div>
        </div>

        <button className="hover:opacity-50">
          <MoreHorizontal />
        </button>
      </div>

      <Suspense fallback={<FallbackContainer />} >
        <img
          src={imagePost + `?random=${Math.floor(Math.random() * 100)}`}
          className="w-full h-full object-cover max-h-[540px] rounded-md"
          alt="imagem aleatoria"
        />
      </Suspense>      

      <div className="flex gap-2 justify-between items-center">
        <div className="flex gap-2 justify-start items-center">
          <HearthPostIcon className={"w-6 h-6 cursor-pointer"} />
          <ChatIconPost className={"w-6 h-6 cursor-pointer"} />
          <ShareIcon className={"w-6 h-6 cursor-pointer"} />
        </div>
        <SaveIcon className={"w-6 h-6 cursor-pointer"} />
      </div>
      <div className="leading-6 flex-col flex">
        <span className="font-bold text-sm">
          {Math.floor(Math.random() * 999)} curtidas
        </span>
        <span className="font-semibold text-sm text-primary/70">
          {comentarioName}
        </span>
        <span className="font-light text-primary/50">
          ver todos os {Math.floor(Math.random() * 100)} comentarios
        </span>
        <div className="flex justify-between items-center">
          <input
            placeholder="Adicione um comentário..."
            className="bg-transparent outline-none pr-3 w-full pt-6"
          />
          <Smile size={16} />
        </div>
      </div>
    </article>
  );
};

export default PostCard;
