import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import BrowseTheRoom from 'parts/HomePage/BrowseTheRoom'
import JustArived from 'parts/HomePage/JustArrived'
import Clients from 'parts/Clients'
import SiteMap from 'parts/SiteMap'

export default function LandingPage() {
  return (
    <>
    <Header/>
    <Hero/>
    <BrowseTheRoom/>
    <JustArived/>
    <Clients/>
    <SiteMap/>
    </>
  )
}
