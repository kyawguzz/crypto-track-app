import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icon.png'

const Logo = () => {
  return (
    <Link to="/"
        className='absolute top-[1.5rem] lg:left-[1.5rem] left-[0.5rem] [text-decoration:none] text-lg text-cyan flex items-center'
    >
        <img src={logo} alt="CrytpoTracks" className='w-[70px] h-[70px]'/> 
    </Link>
  )
}

export default Logo