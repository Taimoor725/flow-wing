import React from 'react';
import { Button } from '@heroui/react';
import Image from 'next/image';

const Stats = () => {
  return (
    <div className="relative z-[10] w-full lg:h-[45vh] flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 py-8 lg:py-16">
      {/* Text Content */}
      <div className="text-left mb-12 w-full z-[10]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          Trusted. Proven. Delivered.
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-[#0B2404CC]">
          Where vision meets measurable impact.
        </p>
      </div>

      {/* Stats & CTA Button */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center z-[10] gap-10 lg:gap-0">
        {/* Stats Blocks */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {[
            { value: '+120', label: 'Faster Onboarding' },
            { value: '+5M', label: 'Users Impacted' },
            { value: '+20', label: 'Global Partners' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center flex flex-row lg:flex-col items-center gap-10 lg:gap-0"
            >
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-l to-[#7DFF6C] from-[#03562D] bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-base md:text-lg text-[#0B2404B2] w-[10rem] flex justify-center items-center text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-end">
          <Button
            color="primary"
            href="#"
            variant="flat"
            className="bg-[#0B2404] text-[#B1EC02] font-semibold w-[13rem] text-lg flex justify-center items-center gap-2 py-7 lg:py-8 rounded-full hover:cursor-pointer"
            endContent={
              <Image
                src="/icons/arrowgreen.svg"
                width={60}
                height={60}
                alt="how-it-works-icon"
                className="w-5 object-contain"
              />
            }
          >
            Contact us
          </Button>
        </div>
      </div>

      {/* Background Images (Desktop vs Mobile) */}
      <Image
        src="/feature/states/statesbg1.svg"
        width={2500}
        height={1500}
        alt="states-bg-color"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden lg:block"
      />
      <Image
        src="/feature/states/mob-bg.svg"
        width={2500}
        height={1500}
        alt="states-bg-color"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 block lg:hidden"
      />

      <Image
        src="/feature/states/statesbg2.svg"
        width={1000}
        height={1000}
        alt="states-bg-patches"
        // className="h-[45vh] absolute right-[-40%] top-1/2 -translate-y-1/2 hidden lg:block"
        className="h-[45vh] absolute top-1/2 -translate-y-1/2 hidden lg:block right-0 translate-x-[25%] max-w-[50vw]"

      />
      <Image
        src="/feature/states/mob-bg-2.svg"
        width={500}
        height={500}
        alt="states-bg-patches"
        className="h-[45vh] absolute right-[-70%] top-[76.5%] -translate-y-1/2 block lg:hidden"
      />
    </div>
  );
};

export default Stats;
