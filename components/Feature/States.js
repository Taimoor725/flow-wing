import React from 'react';
import { Button } from '@heroui/react';
import Image from 'next/image';


const Stats = () => {
    return (
        <div className="lg:h-[45vh] flex flex-col justify-center items-start px-8 lg:py-16 py-8 relative _bg-[green] z-[10]">
            <div className="text-left mb-12 lg:px-40 z-[10]">
                <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-black leading-tight">
                    Trusted. Proven. Delivered.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-[#0B2404CC]">
                    Where vision meets measurable impact.
                </p>
            </div>




            <div className='flex lg:flex-row flex-col w-full lg:px-40 lg:justify-between justify-start z-[10] items-center'>
                <div className="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0">
                   
                    <div className="text-center flex flex-row lg:flex-col md:text-left lg:gap-0 gap-10">
                        <p className="text-5xl font-bold bg-gradient-to-l to-[#7DFF6C] from-[#03562D] bg-clip-text text-transparent">+120</p>
                        <p className="lg:text-lg text-base text-[#0B2404B2]  lg:w-auto flex justify-center items-center w-[10rem]">Faster Onboarding</p>
                    </div>

                    <div className="text-center flex flex-row lg:flex-col md:text-left lg:gap-0 gap-10">
                        <p className="text-5xl font-bold bg-gradient-to-l to-[#7DFF6C] from-[#03562D] bg-clip-text text-transparent">+5M</p>
                        <p className="lg:text-lg text-base text-[#0B2404B2]  lg:w-auto flex justify-center items-center w-[10rem]">Faster Onboarding</p>
                    </div>
                    <div className="text-center flex flex-row lg:flex-col md:text-left lg:gap-0 gap-10">
                        <p className="text-5xl font-bold bg-gradient-to-l to-[#7DFF6C] from-[#03562D] bg-clip-text text-transparent">+20</p>
                        <p className="lg:text-lg text-base text-[#0B2404B2]  lg:w-auto flex justify-center items-center w-[10rem]">Faster Onboarding</p>
                    </div>
                </div>
                <div className='lg:w-auto w-full flex justify-start lg:justify-end lg:mt-0 mt-10'>
                    <Button
                        color="primary"
                        href="#"
                        variant="flat"
                        className="bg-[#0B2404] text-[#B1EC02] font-semibold w-[13rem] text-lg flex justify-center items-center gap-2 lg:py-8 py-7 rounded-full hover:cursor-pointer"
                        endContent={<Image src="/icons/arrowgreen.svg" width={60} height={60} alt='how-it-works-icon' className="w-5 object-contain" />}
                    >
                        Contact us
                    </Button>
                </div>
            </div>

            <Image src={'/feature/states/statesbg1.svg'} width={2500} height={1500} alt='states-bg-color' className='_w-[40rem] absolute bottom-0 left-1/2 -translate-x-1/2 lg:block hidden'/>
            <Image src={'/feature/states/mob-bg.svg'} width={2500} height={1500} alt='states-bg-color' className='_w-[40rem] absolute bottom-0 left-1/2 -translate-x-1/2 lg:hidden block'/>



            <Image src={'/feature/states/statesbg2.svg'} width={1000} height={1000} alt='states-bg-patches' className='h-[45vh] absolute right-[-40%]  top-1/2 -translate-1/2 lg:block hidden'/>
            <Image src={'/feature/states/mob-bg-2.svg'} width={500} height={500} alt='states-bg-patches' className='h-[45vh] absolute right-[-70%] top-[76.5%] -translate-1/2 lg:hidden block'/>


        </div>
    );
};

export default Stats;