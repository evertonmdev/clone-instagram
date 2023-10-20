import React, { useState } from 'react'

const SaveIcon = ({className}) => {
    const [saved, setSaved] = useState(false)
    const handleAction = () => setSaved(!saved)
  
     
    return (
        saved ?
        <svg aria-label="Remover" onClick={handleAction} className={className} color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" role="img" viewBox="0 0 24 24"><title>Remover</title><path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path></svg>
        :
        <svg aria-label="Salvar" onClick={handleAction} className={className} color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" role="img" viewBox="0 0 24 24" ><title>Salvar</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
    )
}

export default SaveIcon