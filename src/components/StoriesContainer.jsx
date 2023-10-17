import React, { useEffect, useState } from 'react'
import CardStories from './CardStories'
import { ArrowRightCircleIcon } from 'lucide-react'
import fakeData from '../utils/fakePosts.json'
import axios from 'axios'

const StoriesContainer = () => {
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
            profileImage: fakeUser.data?.results[0]?.picture.thumbnail
          })
        }
    
        setData(newData)
        
      }
  
      gerarProfilePictureAndPosts()
    }, [])
  
    return (
        <div className='w-full h-fit relative flex justify-center items-center lg:px-10'>
            <div className='w-full overflow-x-auto flex justify-start items-center gap-3 HiddenScroller'>
                { 
                    data.length > 0 ? data.map(e => {
                        return ( 
                            <CardStories image={e.profileImage} name={e.nome} />
                        )
                    })
                    : <h3 className='text-center w-full animate-pulse'>Carregando</h3>
                }
            </div>
            <ArrowRightCircleIcon className='absolute right-5 hidden lg:block'/>
        </div>
  )
}

export default StoriesContainer