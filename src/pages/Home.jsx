import React from 'react'
import { Hero } from '../components/HomeHero'
import "../styles/home/hero.css"
import WhoAreWe from '../components/HomeWhoarewe'
import WhatWeDo from '../components/HomeWhatwedo'

export const Home = () => {
  return (
    <>
      <Hero />
      <WhoAreWe />
      <WhatWeDo />
      {/* <Hero /> */}
    </>
  )
}
