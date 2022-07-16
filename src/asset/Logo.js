import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div>
      <Link to="/"><div className='ml-4 font-extrabold text-yellow text-2xl '>FU<span className='text-black'>RNI</span></div></Link>
    </div>
  )
}
