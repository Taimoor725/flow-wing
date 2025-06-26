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
            <Button className='mt-40 flex justify-center items-center bg-white px-8 h-[4rem] shadow-2xl border-[1px] border-gray-300 rounded-4xl hover:cursor-pointer'>
                <Image src="/icons/bolt.svg" alt='service-button' width={100} height={100} className='w-12 h-12 object-cover' />
                <div className='text-2xl font-extralight text-[#0B2404]'>Project Overview</div>
            </Button>

            {/* testimonials  */}
            <div className='flex flex-col w-[70%] justify-center items-center gap-10'>
                <div className=' text-8xl font-extrabold text-[#0B2404] flex justify-center items-center'>
                    Proof of Execution
                </div>
                <div className=' text-center text-2xl font-extralight text-[#0B2404CC] w-[65%]'>
                    Every project is a story of speed, precision, and measurable success.
                </div>
            </div>
        </div>
    )
}


const CardSection = () => {
    return (
        <div className="w-screen h-auto px-32 flex justify-center mt-20 pb-32 _bg-[red]">
            <div className="w-[79%] flex flex-col gap-8">
                <ExecutionCards1/>
                <ExecutionCard2/>
                <ExecutionCard3/>
            </div>
        </div>
    );
};