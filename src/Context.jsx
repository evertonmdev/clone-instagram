import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import axios from 'axios';

import fakeData from './utils/fakePosts.json'

export const Context = createContext({})
export const ContextProvider = ({children}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [users, setUsers] = useState([])

    const PreLoadingImages = async () => {
        const data = []
    
        for(let userPost of fakeData) {
          const fakeUser = await axios({
            method: "get",
            url: "https://randomuser.me/api/"
          })
        
          data.push({
            ...userPost,
            imagePost: "https://random.imagecdn.app/500/600",
            profileImage: fakeUser.data?.results[0]?.picture.thumbnail
          })
        }
        
        setUsers(data)
        setIsLoaded(true)
    }
    
    useEffect(() => {
        PreLoadingImages()
    }, [])

    const values = {
        users, 
        isLoaded
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}