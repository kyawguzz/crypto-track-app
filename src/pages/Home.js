import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { CryptoProvider } from '../context/CryptoContext'
import { StorageProvider } from '../context/StorageContext'
import { TrendingProvider } from '../context/TrendingContext'
import Footer from './Footer'

const Home = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
         <StorageProvider>
            <main className='w-full h-full flex flex-col first-letter:cotent-center items-center 
            relative text-white font-nunito'>
            
                <div className='w-screen h-screen bg-[#1a1a1a] fixed -z-10' />

                <Logo />
                <Navigation />
                <Footer />
                <Outlet />
                
            </main>
          </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
    
  )
}

export default Home