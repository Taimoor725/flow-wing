import { Button } from '@heroui/react'
import React from 'react'
import Image from 'next/image'
import CardTemp from '../common/Cards'
import CardMain from './CardMain'

function Services() {
    return (
        <div className='w-screen h-auto'>
            <ButtonUI />
            <CardSection />
        </div>
    )
}

export default Services


const ButtonUI = () => {
    return (
        <div className="w-screen h-auto justify-center items-center flex flex-col gap-12">
            <Button className='lg:mt-40 mt-20 flex justify-center items-center bg-white lg:w-[12rem] w-[10rem] lg:h-[4rem] h-[3rem] shadow-2xl border-[1px] border-gray-300 rounded-4xl hover:cursor-pointer'>
                <Image src="/icons/bolt.svg" alt='service-button' width={100} height={100} className='lg:w-12 lg:h-12 h-9 w-9 object-cover' />
                <div className='lg:text-2xl text-xl font-extralight text-[#0B2404]'>Services</div>
            </Button>

            {/* testimonials  */}
            <div className='flex flex-col lg:w-[70%] justify-center items-center gap-10'>
                <div className=' lg:text-8xl text-4xl font-extrabold text-[#0B2404] flex justify-center items-center'>
                    What We Build
                </div>
                <div className=' text-center lg:text-2xl text-lg font-extralight text-[#0B2404CC] lg:w-[65%] lg:px-0 px-3'>
                    We craft blockchain systems that power industries, secure users, and push the edge of innovation.
                </div>
            </div>
        </div>
    )
}

const CardDetails = [
    { img: "/cards/card-1.svg", name: "Protocol Development", dis: "Custom L2s, EVM chains, Substrate, Tendermint, and Cosmos SDK—engineered for scale." },
    { img: "/cards/card-2.svg", name: "Trustless Architecture", dis: "Designing secure systems with cutting edge—where trust is built on math, not promises." },
    { img: "/cards/card-3.svg", name: "Consumer Apps", dis: "Frictionless, invisible, and adoption-ready. We make Web3 feel invisible." },
]

const CardDetails1 = [
    { img: "/cards/card-4.svg", name: "Real-World Integrations", dis: "Power global supply chains and digital product passports—track, verify, and scale instantly." },
    { img: "/cards/card-5.svg", name: "Decentralized AI", dis: "On-chain AI, multi-party agents, and trustless DeAI—pushing the frontier of autonomous systems." },
]

const CardSection = () => {
    return (
        <div className='w-screen h-auto flex flex-col gap-5 justify-center items-center px-32 _bg-[red] mt-10'>
            <div className='lg:w-full w-[90vw] flex lg:flex-row flex-col gap-5 justify-center _bg-[green]'>
                {
                    CardDetails.map((item, index) => {
                        return (
                            <CardTemp item={item} key={index} />
                        )
                    })
                }
            </div>


            <div className='lg:w-full w-[90vw] flex lg:flex-row flex-col gap-8 justify-center _bg-[pink]'>
                {
                    CardDetails1.map((item, index) => {
                        return (
                            <CardMain item={item} key={index} />
                        )
                    })
                }
            </div>
            <div className='lg:w-full w-[90vw] flex justify-center mt-10 lg:mb-32 mb-16'>
                <Button
                    color="primary"
                    href="#"
                    variant="flat"
                    className="bg-[#B1EC02] text-black font-semibold w-[13rem] text-lg flex justify-center items-center gap-2 py-8 rounded-full hover:cursor-pointer"
                    endContent={<Image src="/icons/arrow.svg" width={60} height={60} alt='how-it-works-icon' className="w-5 object-contain" />}
                >
                    How it works?
                </Button>
            </div>
        </div>
    )
}
