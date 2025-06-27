import React from 'react'
import { Button } from '@heroui/react'
import Image from 'next/image'
import ExecutionCards1 from './ExecutionCards1'
import ExecutionCard2 from './ExecutionCards2'
import ExecutionCard3 from './ExecutionCards3'

function Exeicution() {
  return (
    <div>
        <ButtonUI/>
        <CardSection/>
    </div>
  )
}

export default Exeicution


const ButtonUI = () => {
    return (
        <div className="w-screen h-auto justify-center items-center flex flex-col gap-12">
            <Button className='lg:mt-40 mt-20 flex justify-center items-center bg-white lg:px-8 px-6 h-[4rem]  shadow-2xl border-[1px] border-gray-300 rounded-4xl hover:cursor-pointer'>
                <Image src="/icons/bolt.svg" alt='service-button' width={100} height={100} className='lg:w-12 lg:h-12 w-9 h-9 object-cover' />
                <div className='lg:text-2xl text-base font-extralight text-[#0B2404]'>Project Overview</div>
            </Button>

            {/* testimonials  */}
            <div className='flex flex-col w-[70%] justify-center items-center gap-10'>
                <div className=' lg:text-8xl text-4xl lg:w-auto w-[90vw] font-extrabold text-[#0B2404] flex justify-center items-center'>
                    Proof of Execution
                </div>
                <div className=' text-center lg:text-2xl text-base font-extralight text-[#0B2404CC] lg:w-[65%] w-[90vw]'>
                    Every project is a story of speed, precision, and measurable success.
                </div>
            </div>
        </div>
    )
}


const CardSection = () => {
    return (
        <div className="w-screen h-auto lg:px-32 px-5 flex justify-center mt-20 lg:pb-32 pb-10 _bg-[red]">
            <div className="lg:w-[79%] w-full flex flex-col gap-8">
                <ExecutionCards1/>
                <ExecutionCard2/>
                <ExecutionCard3/>
            </div>
        </div>
    );
};