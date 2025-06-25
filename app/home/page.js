import React from 'react'
import { Link, Image } from '@heroui/react'
import { Button } from '@heroui/react'
import NavBar from '@/components/common/Navbar'
import Avatars, { Text } from '@/components/home/Avatars'
import Partners from '@/components/home/Partners'

function page() {
    return (
        <div className='w-auto h-auto'>
            <LandingPage />
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
                <Image src={"/icons/arrow.svg"} width={300} alt="arrow" className="w-5 h-5 object-cover" />
            </div>

            <div className="w-screen h-screen inset-0 -z-10">
                <Image src={"/main.svg"} alt="main-banner" className="w-screen h-full object-cover" />
            </div>
            <NavBar/>  
            <div className=' absolute top-72 left-1/2 -translate-1/2 z-[10]'>
                <Avatars/>
            </div>
            <div className=' absolute top-[50%] left-[50%] -translate-1/2 z-[10] w-full'>
                <Text/>
            </div>
            <div className=' absolute top-[70%] left-1/2 -translate-1/2 z-[10]'>
                <Button
                            as={Link}
                            color="primary"
                            href="#"
                            variant="flat"
                            className="bg-[#B1EC02] text-black font-semibold w-[15rem] text-lg flex justify-center items-center gap-2 py-7 rounded-full"
                            endContent={<Image src="/icons/arrow.svg" className="w-5"/>}
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