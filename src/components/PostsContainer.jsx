import React, { useContext } from "react";

import PostCard from "./PostCard";
import { Context } from "../Context";

const PostsContainer = () => {
  const { users, isLoaded } = useContext(Context);

  return (
    <div className="w-full h-full max-w-[468px] flex flex-col">
      <div className="w-full min-h-fit flex flex-col py-primaryDesktopY max-sm:pb-[10vh] divide-y divide-white/40">
        {isLoaded ? (
          users.map((e, index) => <PostCard key={index} {...e} />)
        ) : (
          <h3 className="animate-pulse">Carregando posts...</h3>
        )}
      </div>
    </div>
  );
};

export default PostsContainer;
