'use client';
import Image from 'next/image';
import InputField from './Input';
import { Button, Chip } from '@heroui/react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B2404] text-white pt-12 sm:pt-16 xl:pt-20 px-4 sm:px-6 xl:px-28 flex flex-col gap-12 relative overflow-x-hidden">
      
      {/* Top Section: Subscribe + Columns */}
      <div className="w-full flex flex-col lg:flex-col xl:flex-row gap-10 lg:gap-12 xl:gap-20">
        
        {/* Subscribe box */}
        <div className='
          w-full
          xl:w-[28%]
          bg-[#0AAB15]/10
          border border-[#0AAB151A]
          rounded-3xl
          flex flex-col justify-center items-center
          p-4 sm:p-6 lg:p-8 xl:p-10
          gap-3 sm:gap-4 lg:gap-6
        '>
          <Image src="/logo1.svg" alt='logo1' width={100} height={100} className='w-10 sm:w-12 xl:w-14 object-cover' />
          
          <div className='flex flex-col items-center text-center gap-1'>
            <div className='text-base sm:text-lg lg:text-xl xl:text-2xl font-medium'>
              Don’t miss and update
            </div>
            <div className='text-xs sm:text-sm lg:text-base xl:text-lg font-light text-[#FFFFFF99]'>
              Lorem ipsum is placeholder text.
            </div>
          </div>

          <InputField />

          <Button
            color="primary"
            href="#"
            variant="flat"
            className="
              bg-[#0B2404]
              text-[#B1EC02]
              font-semibold
              w-full
              text-sm sm:text-base lg:text-lg xl:text-xl
              flex justify-center items-center
              gap-2
              py-3 sm:py-5 lg:py-6 xl:py-8
              rounded-full
              border border-[#B1EC02]
            "
            endContent={
              <Image src="/icons/arrowgreen.svg" width={60} height={60} alt='arrow' className="w-4 sm:w-5 object-contain" />
            }
          >
            Subscribe
          </Button>
        </div>

        {/* Info Columns */}
        <div className="w-full flex flex-col sm:flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-20">
          <ServiceColumn />
          <ProjectsColumn />
          <CompanyColumn />
        </div>
      </div>

      {/* Contact and Social */}
      <div className='w-full flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center gap-6'>
        
        {/* Social Icons */}
        <div className='flex gap-4 sm:gap-5 w-full lg:w-auto justify-center flex-wrap'>
          {["social1", "social2", "social3", "social4"].map((icon, i) => (
            <Chip key={i} className='w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#0AAB15]/10 flex justify-center items-center border border-[#0AAB151A]'>
              <Image src={`/footer/${icon}.svg`} width={100} height={100} alt='social' className='w-6 sm:w-7 h-6 sm:h-7 object-cover' />
            </Chip>
          ))}
        </div>

        {/* Phone + Email */}
        <div className='flex flex-col sm:flex-row gap-4 w-full lg:w-auto justify-center items-center'>
          <Button className='flex w-full sm:w-auto rounded-full px-3 sm:px-4 items-center gap-2 sm:gap-3 py-3 sm:py-4 bg-[#0AAB15]/10 border border-[#0AAB151A] justify-start'>
            <Image src="/footer/phone.svg" width={100} height={100} alt='phone' className='w-5 sm:w-6 h-5 sm:h-6 object-cover' />
            <div className='text-sm sm:text-base lg:text-xl text-[#FFFFFF99] font-light'>+111 222 3333</div>
          </Button>

          <Button className='flex w-full sm:w-auto rounded-full px-3 sm:px-4 items-center gap-2 sm:gap-3 py-3 sm:py-4 bg-[#0AAB15]/10 border border-[#0AAB151A] justify-start'>
            <Image src="/footer/mail.svg" width={100} height={100} alt='mail' className='w-5 sm:w-6 h-5 sm:h-6 object-cover' />
            <div className='text-sm sm:text-base lg:text-xl text-[#FFFFFF99] font-light'>contact@flowwing.io</div>
          </Button>
        </div>
      </div>

      {/* Divider */}
      <div className='w-full h-[1px] bg-[#FFFFFF1A]'></div>

      {/* Bottom Row */}
      <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4'>
        
        <div className='text-xs sm:text-sm lg:text-xl font-light text-[#FFFFFF99] text-center'>
          Copyright © 2025 Flow Wing Lab.
        </div>
        <Image src="/footer/flag.svg" alt='flag' width={100} height={100} className='w-6 sm:w-8 xl:w-10 object-cover' />
        
        <div className='text-xs sm:text-sm lg:text-xl font-light text-[#FFFFFF99] text-center'>
          Terms & Conditions • Privacy Policy
        </div>
      </div>

      {/* Background Decoration */}
      <Image src="/footer/bg.svg" alt='footer bg' width={1000} height={500} className='object-cover absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none' />
    </footer>
  )
}






const ServiceColumn = () => (
  <div className='w-full lg:w-1/3 flex flex-col gap-3 sm:gap-4 text-[#FFFFFF99] text-sm sm:text-base lg:text-lg font-light'>
    <div className='text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-bold'>
      Services
    </div>
    {[
      "Protocol Development",
      "Trustless Architecture",
      "Consumer Apps",
      "Real-World Integrations",
      "Decentralized AI"
    ].map((item, i) => (
      <div key={i} className='flex justify-between items-center'>
        {item}
        <Image src="/icons/arrowgray.svg" alt='arrow' width={200} height={200} className='w-4 sm:w-5 xl:w-6 h-4 sm:h-5 object-cover' />
      </div>
    ))}
  </div>
)





const ProjectsColumn = () => (
  <div className='w-full lg:w-1/3 flex flex-col gap-3 sm:gap-4 text-[#FFFFFF99] text-sm sm:text-base lg:text-lg font-light'>
    <div className='text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-bold'>
      Projects
    </div>
    {[
      "One DEX, Every Chain",
      "Cross-Chain Raffles, Engineered for Scale",
      "Next-Gen L2 with Real Scale"
    ].map((item, i) => (
      <div key={i} className='flex justify-between items-center'>
        {item}
        <Image src="/icons/arrowgray.svg" alt='arrow' width={200} height={200} className='w-4 sm:w-5 xl:w-6 h-4 sm:h-5 object-cover' />
      </div>
    ))}
  </div>
)



const CompanyColumn = () => (
  <div className='w-full lg:w-1/3 flex flex-col gap-3 sm:gap-4 text-[#FFFFFF99] text-sm sm:text-base lg:text-lg font-light'>
    <div className='text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-bold'>
      Company
    </div>

    {["About", "Contact"].map((item, i) => (
      <div key={i} className='flex justify-between items-center'>
        {item}
        <Image src="/icons/arrowgray.svg" alt='arrow' width={200} height={200} className='w-4 sm:w-5 xl:w-6 h-4 sm:h-5 object-cover' />
      </div>
    ))}

    <div className='flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        Careers
        <Button className="min-w-[4rem] sm:min-w-[5rem] text-xs sm:text-sm lg:text-base flex justify-center items-center text-black p-2 sm:p-3 rounded-3xl bg-[#B1EC02]">
          Hiring
        </Button>
      </div>
      <Image src="/icons/arrowgray.svg" alt='arrow' width={200} height={200} className='w-4 sm:w-5 xl:w-6 h-4 sm:h-5 object-cover' />
    </div>
  </div>
)
