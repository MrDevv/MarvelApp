import React, { useEffect } from 'react'

export const navLinkState = (id_link) => {
  useEffect(() => {
    const navLink = document.querySelector(id_link)

    navLink.classList.add("active")
  
    return () => {
        navLink.classList.remove("active")
    }
  }, [])
}
