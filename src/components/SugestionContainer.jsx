import React, { useEffect, useState } from 'react'
import NormalProfile from './NormalProfile'
import axios from 'axios'

const SugestionContainer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      const gerarProfilePictureAndPosts = async () => {
        const newData = []

        for(let i = 0; i <= 5; i++) {
          const fakeUser = await axios({
            method: "get",
            url: "https://randomuser.me/api/"
          })
    
          newData.push({
            profileImage: fakeUser.data?.results[0]?.picture.thumbnail,
            name: `${fakeUser.data?.results[0]?.name.title} ${fakeUser.data?.results[0]?.name.first}`
          })
        }
    
        setData(newData)
        
      }
  
      gerarProfilePictureAndPosts()
    }, [])
  

    return (
        <section className="w-full flex flex-col gap-3">
            <div className="flex justify-between items-center w-full my-3">
            <h2 className="text-sm font-bold text-primary/85">Sugestões para você</h2>
            <span className="cursor-pointer text-xs text-primary/80 hover:text-primary/60">Mostrar mais</span>
            </div>

            {
                data.length > 0 ? 
                data.map(e => <NormalProfile image={e.profileImage} name={e.name} actionText={"seguir"} />)
                :  <h3 className='text-center w-full animate-pulse'>Carregando</h3>
            }

         </section>
    )
}

export default SugestionContainer