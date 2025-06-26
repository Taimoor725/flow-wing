import React from 'react'
import { Link } from '@heroui/react'
import { Button } from '@heroui/react'
import NavBar from '@/components/common/Navbar'
import Avatars, { Text } from '@/components/home/Avatars'
import Partners from '@/components/home/Partners'
import Services from '@/components/Service/Services'
import Image from 'next/image'
import Feature from '@/components/Feature/Feature'
import Stats from '@/components/Feature/States'

function page() {
    return (
        <div className='w-auto h-auto overflow-x-hidden'>
            <LandingPage />
            <Services/>
            <Feature/>
            <Stats/>
        </div>
    )
}

export default page

const LandingPage = () => {
    return (
        <div className="w-screen h-screen relative overflow-hidden">
            {/* Notification Bar */}
            <div className="z-20 w-full text-xl h-[6vh] bg-[#B1EC02] flex justify-center items-center text-black gap-5">
                <Button className="w-[6rem] flex justify-center items-center text-white p-5 rounded-3xl bg-black">Hiring</Button>
                <div className="text-[#0B2404]">
                    <span className="font-extrabold">We’re hiring!</span> Help us turn every business into a blockchain native.
                </div>
                <Image src={"/icons/arrow.svg"} width={300} height={100} alt="arrow" className="w-5 h-5 object-cover" />
            </div>

            <div className="w-screen h-screen inset-0 -z-10">
                <Image src={"/main.svg"} alt="main-banner" width={2000} height={2000} className="w-screen h-full object-cover" />
            </div>
            <NavBar/>  
            <div className=' absolute top-72 left-1/2 -translate-1/2 z-[10]'>
                <Avatars/>
            </div>
            <div className=' absolute top-[52%] left-[50%] -translate-1/2 z-[10] w-full'>
                <Text/>
            </div>
            <div className=' absolute top-[72%] left-1/2 -translate-1/2 z-[10]'>
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