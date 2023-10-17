import React from "react";
import Aside from "./components/Aside";
import StoriesContainer from "./components/StoriesContainer";
import LeftContainerMain from "./components/LeftContainerMain";
import RigthContainerMain from "./components/RIgthContainerMain";
import PostsContainer from "./components/PostsContainer";
import NormalProfile from "./components/NormalProfile";
import Header from "./components/Header";
import SugestionContainer from "./components/SugestionContainer";

const App = () => {
  return (
    <div className="bg-primary w-full h-screen font-primary text-primary overflow-hidden LayoutPrimary">
      <Header />
      <Aside />
      <div className="flex gap-2 min-w-full min-h-full pt-primaryMobileY md:pt-primaryDesktopY overflow-y-auto">
        <LeftContainerMain>
          <StoriesContainer />
          <PostsContainer />
        </LeftContainerMain>
        <RigthContainerMain className={"min-w-[20vw] hidden flex-col px-5 mr-6 gap-5 lg:flex"}>
          <NormalProfile image={"https://i.pinimg.com/564x/ac/7e/03/ac7e03044fb7469b99a3190165ffb1c2.jpg"} name={"Elon Musk"} tag={"ElonMusk.ux"} actionText={"mudar"}/>         
          <SugestionContainer />
        </RigthContainerMain>
      </div>
    </div>
  );
};

export default App;

// <div className="flex items-center flex-col  w-full h-full max-w-[630px] overflow-y-auto px-3 py-primaryMobileY md:py-primaryDesktopY HiddenScroller">
// <StoriesContainer />

// </div>
