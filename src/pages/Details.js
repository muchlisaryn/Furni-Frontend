import React from 'react'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import Header from 'parts/Header'
import ProductDetail from 'parts/Details.js/ProductDetails'
import SiteMap from 'parts/SiteMap'
import Footer from 'parts/Footer'
import Suggestion from 'parts/Details.js/Suggestion'

export default function Details() {
  return (
    <>
    <Header position="absolute"/>
    <Breadcrumb list={[
        {url : "/", name:"Home"},
        {url : "/catagories/91231", name:"Office Room"},
        {url : "/catagories/91231/Products/31213", name:"Details"}
        
    ]}/>
    <ProductDetail/>
    <Suggestion/>
    <SiteMap/>
    <Footer/>
    </>
  )
}
