import React from 'react'
import { Button } from '@heroui/react'
import Image from 'next/image'

function Contact() {
    return (
        <div className='w-screen lg:h-[60vh] flex justify-center items-center relative overflow-hidden  lg:py-0 py-10' id="contact">
            <div className='lg:w-[75%] w-[90vw] h-auto flex flex-col justify-center items-center gap-8 z-[10]'>
                <div className='lg:text-7xl text-4xl  font-bold text-[#0B2404] text-center'>
                    Get started in 5 minutes. <br/>Scale without limits
                </div>
                <div className='lg:text-lg text-base _bg-[red] text-center font-light text-[#0B2404B2]'>
                    Lorem ipsum is placeholder text commonly used in the graphic.
                </div>
                <div className='flex lg:flex-row flex-col mt-10 lg:gap-8 gap-3'>
                    <Button
                        color="primary"
                        href="#"
                        variant="flat"
                        className="bg-[#0B2404] text-[#B1EC02] font-semibold lg:w-[11rem] text-lg flex justify-center w-[90vw] items-center gap-2 lg:py-8 py-7 rounded-full hover:cursor-pointer"
                        endContent={<Image src="/icons/arrowgreen.svg" width={60} height={60} alt='how-it-works-icon' className="w-5 object-contain" />}
                    >
                        Contact us
                    </Button>



                    <Button
                        // as={Link}
                        color="primary"
                        href="#"
                        variant="flat"
                        className="_bg-[#B1EC02] text-black font-semibold lg:w-[14rem] w-[90vw] text-lg flex justify-center items-center gap-2 lg:py-8 py-7 rounded-full hover:cursor-pointer border-[2px] border-black"
                        endContent={<Image src="/icons/arrow.svg" alt='arrow-icon' width={60} height={60} className="w-5 object-contain" />}
                    >
                        Explore Our Service
                    </Button>
                </div>
            </div>


            <Image src={"/contact/bg.svg"} width={2080} height={1080} alt='contact-bg' className='_w-screen h-full object-cover absolute top-0 left-0 z-[0]'/>
            <Image src={"/contact/bg2.svg"} width={1080} height={1080} alt='contact-bg' className='_w-screen h-full object-cover absolute top-0 left-0 z-[1]'/>

        </div>
    )
}

export default Contact