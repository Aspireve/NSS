import React, { useEffect } from 'react'
import logo from "../assets/static_images/nss_logo.svg"
import "../styles/loading/startscreen.css"

export default function LoadingScreen({setLoader}) {
    useEffect(() => {
        const nss_image = document.getElementById("nss_image_loading")
        const nss_title = document.getElementById('nss_landing_title')
        const nss_subtite = document.getElementById('nss_landing_subtitle')
        const full_page = document.getElementById("loading-screen-container")
        setTimeout(() => {nss_image.style.scale = 1
        nss_image.style.rotate = "0deg"
        }, 900)
        setTimeout( () => {
            nss_title.style.opacity = 1
            nss_title.style.transform = "translateX(0)"
        }, 1700)
        setTimeout(() => {
            nss_subtite.style.opacity =1
            nss_subtite.style.transform = "translateX(0)"
        }, 2000)
        setTimeout(() => {
            full_page.style.transform = "translateY(-100%)"
        }, 3000)
        setTimeout(() => {
            setLoader(false)
        }, 4000)
    })
  return (
    <div className='loading-screen-container' id='loading-screen-container' >
        <div className='loading-element-container'>
            <img src={logo} id='nss_image_loading' alt='NSS Logo'/>
            <h2 id='nss_landing_title' >TCET-NSS UNIT</h2>
            <h3 id='nss_landing_subtitle'>B-34 Mumbai University</h3>
        </div>
    </div>
  )
}
