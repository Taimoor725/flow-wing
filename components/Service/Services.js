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
            <Button className='mt-40 flex justify-center items-center bg-white w-[12rem] h-[4rem] shadow-2xl border-[1px] border-gray-300 rounded-4xl hover:cursor-pointer'>
                <Image src="/icons/bolt.svg" alt='service-button' width={100} height={100} className='w-12 h-12 object-cover' />
                <div className='text-2xl font-extralight text-[#0B2404]'>Services</div>
            </Button>

            {/* testimonials  */}
            <div className='flex flex-col w-[70%] justify-center items-center gap-10'>
                <div className=' text-8xl font-extrabold text-[#0B2404] flex justify-center items-center'>
                    What We Build
                </div>
                <div className=' text-center text-2xl font-extralight text-[#0B2404CC] w-[65%]'>
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
            <div className='w-full flex gap-5 justify-center _bg-[green]'>
                {
                    CardDetails.map((item, index) => {
                        return (
                            <CardTemp item={item} key={index} />
                        )
                    })
                }
            </div>
            <div className='w-full flex gap-8 justify-center _bg-[pink]'>
                {
                    CardDetails1.map((item, index) => {
                        return (
                            <CardMain item={item} key={index} />
                        )
                    })
                }
            </div>
            <div className='w-full flex justify-center mt-10 mb-32'>
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
