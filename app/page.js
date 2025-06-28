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
    <div className="w-screen lg:h-screen h-screen relative overflow-hidden" id="home">

      {/* Background Layer */}
      <div className="w-screen h-screen absolute inset-0 -z-[0] sec">
        <Image
          src="/main.svg"
          alt="main-banner"
          width={2000}
          height={2000}
          className="w-screen h-full object-cover"
        />
      </div>

      {/* Foreground/Main Content */}
      <div className="flex flex-col w-full h-full justify-center gap-10 items-center relative z-[20] main">
        <div className='mt-32 flex justify-center items-center lg:mr-0 mr-10 '>
        <Avatars text="Blockchain Agency" />
        </div>
        <Text />
        <Button
          as={Link}
          color="primary"
          href="#"
          variant="flat"
          className="bg-[#B1EC02] text-black font-semibold w-[15rem] text-lg flex justify-center items-center gap-2 py-7 rounded-full hover:cursor-pointer"
          endContent={
            <Image
              src="/icons/arrow.svg"
              alt="arrow-icon"
              width={60}
              height={60}
              className="w-5 object-contain"
            />
          }
        >
          Explore Our Service
        </Button>
        <div className='mt-10'>
        <Partners />
        </div>
      </div>
    </div>
  );
};




// const Details=()=>{
//     return(

//     )
// }