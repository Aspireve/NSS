import React, { useEffect } from 'react'
import { Hero } from '../components/HomeHero'
import "../styles/home/hero.css"
import WhoAreWe from '../components/HomeWhoarewe'
import WhatWeDo from '../components/HomeWhatwedo'
import Objectives from '../components/HomeObjectives'
import Map from '../components/HomeMap'
import Domains from '../components/HomeDomains'
import Socials from '../components/HomeSocials'
import Achievements from '../components/HomeAchievements'
import RecentProjects from '../components/HomeRecentprojects'
import Testimonials from '../components/HomeTestimonials'

export const Home = () => {
  useEffect(() => {
    document.title  = "Home | TCET NSS UNIT"
  })
  return (
    <>
      {/* <Hero /> */}
      {/* <WhoAreWe />
      <WhatWeDo />
      <Objectives />
      <Domains />
      <Achievements />
      <RecentProjects />
      <Testimonials />
      <Socials />
      <Map /> */}
    </>
  )
}
