'use client';
import Image from 'next/image';
import InputField from './Input';
import { Button, Chip } from '@heroui/react';


export default function Footer() {
    return (
        <footer className="w-full h-[75vh] bg-[#0B2404] text-white pt-28 px-28 flex flex-col gap-8 relative">
            <div className='w-full h-2/3 flex gap-20'>
                {/* subscriber box */}
                <div className='flex flex-col gap-2 w-[20vw] h-[35vh] bg-[#0AAB15]/10 border rounded-3xl border-[#0AAB151A] justify-center items-center'>
                    <Image src={"/logo1.svg"} alt='logo1' width={100} height={100} className='w-12 object-cover' />
                    <div className='flex flex-col justify-center items-center mb-3'>
                        <div className='text-base font-medium text-white'>Don’t miss and update</div>
                        <div className='text-base font-light text-[#FFFFFF99]'>Lorem ipsum is placeholder text.</div>
                    </div>
                    <InputField />
                    <Button
                        color="primary"
                        href="#"
                        variant="flat"
                        className="bg-[#0B2404] text-[#B1EC02] font-semibold w-[90%] text-lg flex justify-center items-center gap-2 py-8 rounded-full hover:cursor-pointer border border-[#B1EC02]"
                        endContent={<Image src="/icons/arrowgreen.svg" width={60} height={60} alt='how-it-works-icon' className="w-5 object-contain" />}
                    >
                        Subscribe
                    </Button>
                </div>


                <ServiceColume />
                <ProjectsColume />
                <CompanyColume />
            </div>


            {/* contact info section  */}

            <div className='w-full flex _bg-[red] justify-between items-center'>
                <div className='flex gap-5'>
                    <Chip className=' w-14 h-14 rounded-full bg-[#0AAB15]/10 flex justify-center items-center border border-[#0AAB151A]'>
                        <Image src={"/footer/social1.svg"} width={100} height={100} alt='social-icon' className=' w-7 h-7 object-cover'/>
                    </Chip>
                    <Chip className=' w-14 h-14 rounded-full bg-[#0AAB15]/10 flex justify-center items-center border border-[#0AAB151A]'>
                        <Image src={"/footer/social2.svg"} width={100} height={100} alt='social-icon' className=' w-7 h-7 object-cover'/>
                    </Chip>

                    <Chip className=' w-14 h-14 rounded-full bg-[#0AAB15]/10 flex justify-center items-center border border-[#0AAB151A]'>
                        <Image src={"/footer/social3.svg"} width={100} height={100} alt='social-icon' className=' w-7 h-7 object-cover'/>
                    </Chip>

                    <Chip className='w-14 h-14 rounded-full bg-[#0AAB15]/10 flex justify-center items-center border border-[#0AAB151A]'>
                        <Image src={"/footer/social4.svg"} width={100} height={100} alt='social-icon' className=' w-7 h-7 object-cover'/>
                    </Chip>
                </div>

                <div className='flex gap-3'>
                    <Button className='flex rounded-full px-4 items-center gap-3 py-7  bg-[#0AAB15]/10 border border-[#0AAB151A]'>
                        <Image src={"/footer/phone.svg"} width={100} height={100} alt='social-icon' className=' w-7 h-7 object-cover'/>
                        <div className='flex-grow-1 text-xl text-[#FFFFFF99] font-light'>+111 222 3333</div>
                    </Button>

                    <Button className='flex rounded-full px-4 items-center gap-3 py-7 bg-[#0AAB15]/10 border border-[#0AAB151A]'>
                        <Image src={"/footer/mail.svg"} width={100} height={100} alt='social-icon' className=' w-7 h-7 object-cover'/>
                        <div className='flex-grow-1 text-xl text-[#FFFFFF99] font-light'>contact@flowwing.io</div>
                    </Button>
                </div>
            </div>

            {/* Line */}
            <div className='w-full h-[1px] bg-[#FFFFFF1A]'></div>

            <div className='w-full _bg-[red] h-[10vh] flex items-center justify-between'>
                <div className='text-xl font-light text-[#FFFFFF99]'>
                    Copyright © 2025 Flow Wing Lab.
                </div>
                <Image src={"/footer/flag.svg"} alt='flag' width={100} height={100} className='w-10 object-cover'/>
                <div className='text-xl font-light text-[#FFFFFF99]'>
                    Terms & Conditions • Privacy Policy
                </div>
            </div>

            <Image src={"/footer/bg.svg"} alt='footer bg' width={1000} height={500} className=' object-cover absolute bottom-0 left-1/2 -translate-x-1/2'/> 
        </footer>
    );
}





const ServiceColume = () => {
    return (
        <div className='w-[16vw] h-2/3 flex flex-col gap-4 text-[#FFFFFF99] text-lg font-light'>
            <div className=' text-white text-2xl font-bold'>
                Services
            </div>
            <div className='flex flex-col'>
                <div className='flex w-full justify-between items-center'>Protocol Development <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className=' w-6  h-5 object-cover ' /></div>
            </div>


            <div className='flex flex-col'>
                <div className='flex w-full justify-between items-center'>Trustless Architecture <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  w-6  h-5 object-cover' /></div>
            </div>

            <div className='flex flex-col'>
                <div className='flex w-full justify-between items-center'>Consumer Apps <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  w-6  h-5 object-cover' /></div>
            </div>

            <div className='flex flex-col'>
                <div className=' items-center flex w-full justify-between'>Real-World Integrations <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  w-6  h-5 object-cover' /></div>
            </div>

            <div className='flex flex-col'>
                <div className='flex w-full items-center justify-between'>Decentralized AI <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  w-6  h-5 object-cover' /></div>
            </div>
        </div>
    )
}



const ProjectsColume = () => {
    return (
        <div className='w-[16vw] h-2/3 flex flex-col gap-4 text-[#FFFFFF99] text-lg font-light'>
            <div className=' text-white text-2xl font-bold'>
                Projects
            </div>
            <div className='flex flex-col'>
                <div className='flex w-full items-center justify-between mr-2'>One DEX, Every Chain<Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className=' w-6  h-5 object-cover ' /></div>
            </div>


            <div className='flex flex-col'>
                <div className='flex w-full items-center justify-between'>Cross-Chain Raffles, Engineered for Scale <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  w-6  h-5 object-cover' /></div>
            </div>

            <div className='flex flex-col'>
                <div className='flex w-full  items-center justify-between'>Next-Gen L2 with Real Scale <Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  w-6  h-5 object-cover' /></div>
            </div>
        </div>
    )
}

const CompanyColume = () => {
    return (
        <div className='w-[16vw] h-2/3 flex flex-col gap-4 text-[#FFFFFF99] text-lg font-light'>
            <div className=' text-white text-2xl font-bold'>
                Company
            </div>
            <div className='flex flex-col'>
                <div className='flex w-full items-center justify-between mr-2'>About<Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className=' w-6  h-5 object-cover ' /></div>
            </div>


            <div className='flex flex-col'>
                <div className='flex w-full items-center justify-between'>Contact<Image src={"/icons/arrowgray.svg"} alt='arrow-icon-footer' width={200} height={200} className='  w-6  h-5 object-cover' /></div>
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