import React from "react";

import {
  Header,
  Aside,
  LeftContainerMain,
  NormalProfile,
  PostsContainer,
  RigthContainerMain,
  StoriesContainer,
  SugestionContainer,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full h-screen font-primary text-primary overflow-hidden LayoutPrimary md:px-5">
      <Header />
      <Aside />
      <div className="flex gap-2 min-w-full min-h-full pt-primaryMobileY md:pt-primaryDesktopY overflow-y-auto">
        <LeftContainerMain>
          <StoriesContainer />
          <PostsContainer />
        </LeftContainerMain>
        <RigthContainerMain
          className={"min-w-[20vw] hidden flex-col px-5 mr-6 gap-5 lg:flex"}
        >
          <NormalProfile
            image={"https://avatars.githubusercontent.com/u/122039415?v=4"}
            name={"Everton Matheus"}
            tag={"evertonmdev"}
            actionText={"mudar"}
          />
          <SugestionContainer />
        </RigthContainerMain>
      </div>
    </div>
  );
};

export default App;