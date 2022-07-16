import React from 'react'
import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import SiteMap from 'parts/SiteMap'
import Footer from 'parts/Footer'
import ShoppingCart from 'parts/Cart/ShoppingCart'
import ShippingDetails from 'parts/Cart/ShippingDetails'

export default function Cart() {
  return (
    <>
    <Header position="absolute"/>
    <Breadcrumb list={[
        {url : "/", name:"Home"},
        {url : "/cart", name:"Shooping Cart"},
    ]}/>

<section class="md:py-16">
      <div class="container mx-auto px-4">
        <div class="flex -mx-4 flex-wrap">
            <ShoppingCart/>
            <ShippingDetails/>
        </div>
        </div>
        </section>

    <SiteMap/>
    <Footer/>
    </>
  )
}
