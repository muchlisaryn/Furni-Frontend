import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import BrowseTheRoom from 'parts/HomePage/BrowseTheRoom'
import JustArived from 'parts/HomePage/JustArrived'
import Clients from 'parts/Clients'
import SiteMap from 'parts/SiteMap'
import Footer from 'parts/Footer'

export default function LandingPage() {
  return (
    <>
    <Header theme={"white"}/>
    <Hero/>
    <BrowseTheRoom/>
    <JustArived/>
    <Clients/>
    <SiteMap/>
    <Footer/>
    </>
  )
}
