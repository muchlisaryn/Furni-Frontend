import React from 'react'
import Header from 'parts/Header'
import SiteMap from 'parts/SiteMap'
import Footer from 'parts/Footer'
import ErrorMassage from 'parts/ErrorMassage'


export default function Error (
) {
  return (
    <>
    <Header/>
    <ErrorMassage/>
    <SiteMap/>
    <Footer/>
    </>
  )
}
