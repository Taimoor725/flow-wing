'use client';
import Image from 'next/image';
import InputField from './Input';
import { Button, Chip } from '@heroui/react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#0B2404] text-white pt-20 px-6 lg:px-28 flex flex-col gap-12 relative">
            {/* Top Sections (Subscribe + Columns) */}
            <div className='w-full flex flex-col lg:flex-row gap-12 lg:gap-20'>
                {/* Subscribe box */}
                <div className='w-full lg:w-[20vw] h-auto lg:h-[35vh] bg-[#0AAB15]/10 border border-[#0AAB151A] rounded-3xl flex flex-col justify-center items-center p-6 gap-4'>
                    <Image src={"/logo1.svg"} alt='logo1' width={100} height={100} className='w-12 object-cover' />
                    <div className='flex flex-col items-center text-center gap-1 mb-2'>
                        <div className='text-base font-medium'>Don’t miss and update</div>
                        <div className='text-base font-light text-[#FFFFFF99]'>Lorem ipsum is placeholder text.</div>
                    </div>
                    <InputField />
                    <Button
                        color="primary"
                        href="#"
                        variant="flat"
                        className="bg-[#0B2404] text-[#B1EC02] font-semibold w-full lg:w-[90%] text-lg flex justify-center items-center gap-2 py-6 lg:py-8 rounded-full hover:cursor-pointer border border-[#B1EC02]"
                        endContent={<Image src="/icons/arrowgreen.svg" width={60} height={60} alt='how-it-works-icon' className="w-5 object-contain" />}
                    >
                        Subscribe
                    </Button>
                </div>

                {/* Info Columns */}
                <div className="flex flex-col lg:flex-row w-full gap-12">
                    <ServiceColume />
                    <ProjectsColume />
                    <CompanyColume />
                </div>
            </div>

            {/* Contact info section */}
            <div className='w-full flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center gap-6'>
                {/* Socials */}
                <div className='flex gap-5 lg:w-auto w-full justify-center'>
                    {["social1", "social2", "social3", "social4"].map((icon, i) => (
                        <Chip key={i} className='w-14 h-14 rounded-full bg-[#0AAB15]/10 flex justify-center items-center border border-[#0AAB151A]'>
                            <Image src={`/footer/${icon}.svg`} width={100} height={100} alt='social-icon' className='w-7 h-7 object-cover' />
                        </Chip>
                    ))}
                </div>

                {/* Phone + Email */}
                <div className='flex flex-col sm:flex-row gap-4 lg:w-auto w-full justify-center'>
                    <Button className='flex rounded-full px-4 items-center gap-3 py-4 bg-[#0AAB15]/10 border border-[#0AAB151A] justify-start'>
                        <Image src={"/footer/phone.svg"} width={100} height={100} alt='social-icon' className='w-6 h-6 object-cover' />
                        <div className='text-base lg:text-xl text-[#FFFFFF99] font-light'>+111 222 3333</div>
                    </Button>

                    <Button className='flex rounded-full px-4 items-center gap-3 py-4 bg-[#0AAB15]/10 border border-[#0AAB151A] justify-start'>
                        <Image src={"/footer/mail.svg"} width={100} height={100} alt='social-icon' className='w-6 h-6 object-cover' />
                        <div className='text-base lg:text-xl text-[#FFFFFF99] font-light'>contact@flowwing.io</div>
                    </Button>
                </div>
            </div>

            {/* Divider */}
            <div className='w-full h-[1px] bg-[#FFFFFF1A]'></div>

            {/* Footer bottom row */}
            <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-4'>
                <Image src={"/footer/flag.svg"} alt='flag' width={100} height={100} className='w-8 lg:w-10 object-cover lg:hidden block' />

                <div className='text-sm lg:text-xl font-light text-[#FFFFFF99] text-center'>
                    Copyright © 2025 Flow Wing Lab.
                </div>
                <Image src={"/footer/flag.svg"} alt='flag' width={100} height={100} className='w-8 lg:w-10 object-cover lg:block hidden' />
                <div className='text-sm lg:text-xl font-light text-[#FFFFFF99] text-center'>
                    Terms & Conditions • Privacy Policy
                </div>
            </div>

            {/* Background decoration */}
            <Image src={"/footer/bg.svg"} alt='footer bg' width={1000} height={500} className='object-cover absolute bottom-0 left-1/2 -translate-x-1/2' />
        </footer>
    );
}






const ServiceColume = () => {
    return (
        <div className='lg:w-[16vw] w-full h-2/3 flex flex-col gap-4 text-[#FFFFFF99] text-lg font-light'>
            <div className=' text-white lg:text-2xl text-xl font-bold'>
                Services
            </div>
            <div className='flex flex-col'>
                <div className='flex w-full justify-between items-center'>Protocol Development <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className=' lg:w-6 lg:h-5 w-5 h-4 object-cover ' /></div>
            </div>


            <div className='flex flex-col'>
                <div className='flex w-full justify-between items-center'>Trustless Architecture <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  lg:w-6 lg:h-5 w-5 h-4 object-cover' /></div>
            </div>

            <div className='flex flex-col'>
                <div className='flex w-full justify-between items-center'>Consumer Apps <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  lg:w-6 lg:h-5 w-5 h-4 object-cover' /></div>
            </div>

            <div className='flex flex-col'>
                <div className=' items-center flex w-full justify-between'>Real-World Integrations <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  lg:w-6 lg:h-5 w-5 h-4 object-cover' /></div>
            </div>

            <div className='flex flex-col'>
                <div className='flex w-full items-center justify-between'>Decentralized AI <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  lg:w-6 lg:h-5 w-5 h-4 object-cover' /></div>
            </div>
        </div>
    )
}



const ProjectsColume = () => {
    return (
        <div className='lg:w-[16vw] w-full h-2/3 flex flex-col gap-4 text-[#FFFFFF99] text-lg font-light'>
            <div className=' text-white lg:text-2xl text-xl font-bold'>
                Projects
            </div>
            <div className='flex flex-col'>
                <div className='flex w-full items-center justify-between mr-2'>One DEX, Every Chain<Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className=' lg:w-6 lg:h-5 w-5 h-4 object-cover ' /></div>
            </div>


            <div className='flex flex-col'>
                <div className='flex w-full items-center justify-between'>Cross-Chain Raffles, Engineered for Scale <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  lg:w-6 lg:h-5 w-5 h-4 object-cover' /></div>
            </div>

            <div className='flex flex-col'>
                <div className='flex w-full  items-center justify-between'>Next-Gen L2 with Real Scale <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  lg:w-6 lg:h-5 w-5 h-4 object-cover' /></div>
            </div>
        </div>
    )
}

const CompanyColume = () => {
    return (
        <div className='lg:w-[16vw] w-full h-2/3 flex flex-col gap-4 text-[#FFFFFF99] text-lg font-light'>
            <div className=' text-white lg:text-2xl text-xl font-bold'>
                Company
            </div>
            <div className='flex flex-col'>
                <div className='flex w-full items-center justify-between mr-2'>About<Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className=' lg:w-6 lg:h-5 w-5 h-4 object-cover ' /></div>
            </div>


            <div className='flex flex-col'>
                <div className='flex w-full items-center justify-between'>Contact<Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  lg:w-6 lg:h-5 w-5 h-4 object-cover' /></div>
            </div>

            <div className='flex flex-col'>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex gap-2 justify-center items-center'>
                        Careers
                        <Button className="w-[5rem] flex justify-center items-center text-black p-3 rounded-3xl bg-[#B1EC02]">Hiring</Button>
                    </div>
                    <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  w-6 h-6 object-cover' /></div>
            </div>

        </div>
    )
}