import React from 'react'
import ImageSection from "../asset/images/image-section-1.jpg"

export default function Hero() {
  return (
    <section className="flex items-center hero">
      <div
        className="w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center hero-caption"
      >
        <h1 className="text-3xl md:text-5xl leading-tight font-semibold">
          Modern furniture <br className="" />For your Home
        </h1>
        <h2 className="px-8 text-base md:px-0 md:text-lg my-6 tracking-wide">
          Kami menyediakan furniture berkelas yang
          <br className="hidden lg:block" />membuat ruangan terasa homey
        </h2>
        <div>
          <a
            href="#browse-the-room"
            className="bg-yellow text-black  hover:bg-yellow2 rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200"
            >Explore Now</a
          >
        </div>
      </div>
      <div className="w-full inset-0 md:relative md:w-1/2">
        <div className="relative hero-image">
          <div className=" inset-0 z-10"></div>
          <div className="overlay right-0 bottom-0 md:inset-0">
            <button
              className="video hero-cta focus:outline-none z-30 modal-trigger"
              data-content='<div className="w-screen pb-56 md:w-88 md:pb-56 relative z-50">
              <div className="absolute w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3h0_v1cdUIA"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>'
            ></button>
          </div>
          <img
            src={ImageSection}
            alt="hero 1"
            className="absolute inset-0 md:relative w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
