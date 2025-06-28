import React from 'react'
import { Button } from '@heroui/react'
import Image from 'next/image'

function Contact() {
    return (
        <div
            id="contact"
            className='w-screen lg:h-[60vh] flex justify-center items-center relative overflow-hidden lg:py-0 py-10 px-4 sm:px-6 md:px-12 lg:px-20'
        >
            <div className='w-full max-w-[1280px] h-auto flex flex-col justify-center items-center gap-6 sm:gap-8 z-[10] text-center'>
                <div className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#0B2404] leading-snug sm:leading-tight'>
                    Get started in 5 minutes. <br />Scale without limits
                </div>

                <div className='text-sm sm:text-base md:text-lg font-light text-[#0B2404B2] px-2 sm:px-4'>
                    Lorem ipsum is placeholder text commonly used in the graphic.
                </div>

                <div className='flex flex-col lg:flex-row gap-3 lg:gap-8 mt-8 sm:mt-10 w-full justify-center items-center'>
                    <Button
                        color="primary"
                        href="#"
                        variant="flat"
                        className="bg-[#0B2404] text-[#B1EC02] font-semibold w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[11rem] text-base sm:text-lg flex justify-center items-center gap-2 py-5 sm:py-6 lg:py-8 rounded-full hover:cursor-pointer"
                        endContent={
                            <Image
                                src="/icons/arrowgreen.svg"
                                width={60}
                                height={60}
                                alt='how-it-works-icon'
                                className="w-4 sm:w-5 object-contain"
                            />
                        }
                    >
                        Contact us
                    </Button>

                    <Button
                        color="primary"
                        href="#"
                        variant="flat"
                        className="bg-[#B1EC02] text-black font-semibold border-2 border-black w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[15rem] text-base sm:text-lg flex justify-center items-center gap-2 py-5 sm:py-6 lg:py-8 rounded-full hover:cursor-pointer"
                        endContent={
                            <Image
                                src="/icons/arrow.svg"
                                width={60}
                                height={60}
                                alt='arrow-icon'
                                className="w-4 sm:w-5 object-contain"
                            />
                        }
                    >
                        Explore Our Service
                    </Button>
                </div>
            </div>

            {/* Background layers */}
            <Image
                src="/contact/bg.svg"
                width={2080}
                height={1080}
                alt='contact-bg'
                className='w-full h-full object-cover absolute top-0 left-0 z-0'
            />
            <Image
                src="/contact/bg2.svg"
                width={1080}
                height={1080}
                alt='contact-bg-layer'
                className='w-full h-full object-cover absolute top-0 left-0 z-1'
            />
        </div>
    )
}

export default Contact
