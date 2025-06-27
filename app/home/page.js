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
            <Services/>
            <Feature/>
            <Stats/>
            <Exeicution/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default page

const LandingPage = () => {
    return (
        <div className="w-screen lg:h-screen h-[110vh] relative overflow-hidden">
            {/* Notification Bar */}
            <div className="z-20 w-full text-xl lg:h-[6vh] h-[10vh] bg-[#B1EC02] flex justify-center items-center text-black gap-5 lg:p-0 px-4">
                <Button className="lg:w-[6rem] w-[4rem] flex justify-center items-center text-white p-5 rounded-3xl bg-black lg:text-base text-sm">Hiring</Button>
                <div className="text-[#0B2404] lg:text-base text-sm">
                    <span className="lg:font-extrabold font-bold">We’re hiring!</span> Help us turn every business into a blockchain native.
                </div>
                <Image src={"/icons/arrow.svg"} width={300} height={100} alt="arrow" className="w-5 h-5 object-cover" />
            </div>

            <div className="w-screen h-screen inset-0 -z-10">
                <Image src={"/main.svg"} alt="main-banner" width={2000} height={2000} className="w-screen h-full object-cover" />
            </div>

            <Nav/>  
            <div className=' absolute lg:top-72 top-48 lg:left-1/2 left-[43%] -translate-1/2 z-[10]'>
                <Avatars/>
            </div>
            <div className=' absolute lg:top-[52%] top-[49%]  left-[50%] -translate-1/2 z-[10] w-full'>
                <Text/>
            </div>
            <div className=' absolute lg:top-[72%] top-[75%]  left-1/2 -translate-1/2 z-[10]'>
                <Button
                            as={Link}
                            color="primary"
                            href="#"
                            variant="flat"
                            className="bg-[#B1EC02] text-black font-semibold w-[15rem] text-lg flex justify-center items-center gap-2 py-7 rounded-full hover:cursor-pointer"
                            endContent={<Image src="/icons/arrow.svg" alt='arrow-icon' width={60} height={60} className="w-5 object-contain" />}
                          >
                            Explore Our Service
                          </Button>
            </div>  

            <div className='w-full absolute bottom-0 left-1/2 -translate-x-1/2 z-[10]'>
                <Partners/>
            </div>
        </div>
    );
};


// const Details=()=>{
//     return(

//     )
// }