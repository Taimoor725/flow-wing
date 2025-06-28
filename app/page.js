import React from 'react'
import { Link } from '@heroui/react'
import { Button } from '@heroui/react'
import Nav from '@/components/common/Nav'
import Avatars, { Text } from '@/components/home/Avatars'
import Partners from '@/components/home/Partners'
import Services from '@/components/Service/Services'
import Image from 'next/image'
import Feature from '@/components/Feature/Feature'
import Stats from '@/components/Feature/States'
import Exeicution from '@/components/exeicution/Exeicution'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/common/Footer'

function page() {
    return (
        <div className='w-auto h-auto overflow-x-hidden'>
            <LandingPage />
            <Services />
            <Feature />
            <Stats />
            <Exeicution />
            <Contact />
            {/* <Footer/> */}
        </div>
    )
}

export default page


const LandingPage = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden" id="home">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-0 w-full h-full">
        <Image
          src="/main.svg"
          alt="main-banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Foreground/Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 lg:px-0 text-center gap-6">
        {/* Avatar Label */}
        <div className="mt-28 lg:mt-32 lg:-translate-x-10">
          <Avatars text="Blockchain Agency" />
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white">
            Engineering Blockchains <br className="hidden lg:block" />
            <span className="text-[#B1EC02]">For Enterprises</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-xl mx-auto">
            Launch powerful, frictionless Web3 experiences in days —
            <strong> not months</strong>.<br />
            Seamless, secure, and enterprise-grade, built to scale without limits.
          </p>
        </div>

        {/* Button */}
        <Button
          as={Link}
          href="#"
          variant="flat"
          className="bg-[#B1EC02] text-black font-semibold w-[14rem] sm:w-[15rem] text-base sm:text-lg py-5 sm:py-7 rounded-full flex items-center justify-center gap-2"
          endContent={
            <Image
              src="/icons/arrow.svg"
              alt="arrow-icon"
              width={60}
              height={60}
              className="w-4 sm:w-5 object-contain"
            />
          }
        >
          Explore Our Services
        </Button>

        {/* Partner Logos */}
        <div className="mt-6 sm:mt-10">
          <Partners />
        </div>
      </div>
    </div>
  );
};



