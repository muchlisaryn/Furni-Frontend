import React from 'react'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import Header from 'parts/Header'
// import BrowseTheRoom from 'parts/HomePage/BrowseTheRoom'
// import JustArived from 'parts/HomePage/JustArrived'
import Clients from 'parts/Clients'
import SiteMap from 'parts/SiteMap'
import Footer from 'parts/Footer'

export default function Details() {
  return (
    <>
    <Header position="absolute"/>
    <Breadcrumb list={[
        {url : "/", name:"Home"},
        {url : "/catagories/91231", name:"Office Room"},
        {url : "/catagories/91231/Products/31213", name:"Details"}
        
    ]}/>
    <Clients/>
    <SiteMap/>
    <Footer/>
    </>
  )
}
