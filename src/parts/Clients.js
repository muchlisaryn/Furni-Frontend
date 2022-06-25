import React from 'react'
import LogoAdobe from "../asset/images/logo-adobe.svg"
import LogoIkea from "../asset/images/logo-ikea.svg"
import LogoHM from "../asset/images/logo-hermanmiller.svg"
import LogoMiele from "../asset/images/logo-miele.svg"

export default function Clients() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-center flex-wrap">
        <div
          className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img src={LogoAdobe} alt="" className="mx-auto" />
        </div>
        <div
          className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img src={LogoIkea} alt="" className="mx-auto" />
        </div>
        <div
          className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img
            src={LogoHM}
            alt=""
            className="mx-auto"
          />
        </div>
        <div
          className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img src={LogoMiele} alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  )
}
