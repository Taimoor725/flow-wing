import React from 'react';
import { Button } from '@heroui/react';
import Image from 'next/image';


const Stats = () => {
    return (
        <div className="h-[45vh] flex flex-col justify-center items-start px-8 py-16 relative _bg-[green]">
            <div className="text-left mb-12 px-40 z-[10]">
                <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-black leading-tight">
                    Trusted. Proven. Delivered.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-[#0B2404CC]">
                    Where vision meets measurable impact.
                </p>
            </div>


            <div className='flex w-full px-40 justify-between z-[10] items-center'>
                <div className="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p className="text-5xl font-bold bg-gradient-to-l to-[#7DFF6C] from-[#03562D] bg-clip-text text-transparent">+120</p>
                        <p className="text-lg text-[#0B2404B2]">Faster Onboarding</p>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-5xl font-bold bg-gradient-to-l to-[#7DFF6C] from-[#03562D] bg-clip-text text-transparent">+5M</p>
                        <p className="text-lg text-[#0B2404B2]">Faster Onboarding</p>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-5xl font-bold bg-gradient-to-l to-[#7DFF6C] from-[#03562D] bg-clip-text text-transparent">+20</p>
                        <p className="text-lg text-[#0B2404B2]">Faster Onboarding</p>
                    </div>
                </div>
                <div>
                    <Button
                        color="primary"
                        href="#"
                        variant="flat"
                        className="bg-[#0B2404] text-[#B1EC02] font-semibold w-[13rem] text-lg flex justify-center items-center gap-2 py-8 rounded-full hover:cursor-pointer"
                        endContent={<Image src="/icons/arrowgreen.svg" width={60} height={60} alt='how-it-works-icon' className="w-5 object-contain" />}
                    >
                        Contact us
                    </Button>
                </div>
            </div>

            <Image src={'/feature/states/statesbg1.svg'} width={2500} height={1500} alt='states-bg-color' className='_w-[40rem] absolute bottom-0 left-1/2 -translate-x-1/2'/>
            <Image src={'/feature/states/statesbg2.svg'} width={1000} height={1000} alt='states-bg-patches' className='h-[45vh] absolute right-[-40%]  top-1/2 -translate-1/2'/>

        </div>
    );
};

export default Stats;