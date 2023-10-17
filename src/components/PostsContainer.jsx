import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import fakeData from '../utils/fakePosts.json'
import axios from "axios";

const PostsContainer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const gerarProfilePictureAndPosts = async () => {
      const newData = []

      for(let userPost of fakeData) {
        const fakeUser = await axios({
          method: "get",
          url: "https://randomuser.me/api/"
        })
      
        newData.push({
          ...userPost,
          imagePost: "https://random.imagecdn.app/500/600",
          profileImage: fakeUser.data?.results[0]?.picture.thumbnail
        })
      }
  
      setData(newData)
      
    }

    gerarProfilePictureAndPosts()
  }, [])

  return (
    <div className="w-full h-full max-w-[468px] flex flex-col">
      <div className="w-full min-h-fit flex flex-col py-primaryDesktopY max-sm:pb-[10vh]">
        {
          data.length > 0 ? data.map((e, index) => 
              <PostCard key={index}
                {...e}
            />)
          :
          <h3>Lamento</h3>
        }
      </div>
    </div>
  );
};

export default PostsContainer;
