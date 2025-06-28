'use client';
import Avatars from '@/components/quote/Avtar1';
import React from 'react';
import { Button } from '@heroui/react';
import Image from 'next/image';
import ContactForm from '@/components/quote/Form';

function Page() {
  return (
    <div className="
      relative
      min-h-screen
      bg-[#0B2404]
      overflow-x-hidden
      border-b border-[#FFFFFF33]
      px-5 sm:px-8 lg:px-16 xl:px-32
      py-20 lg:py-20 xl:py-32
      flex
      flex-col
      xl:flex-row
      gap-12
      lg:items-center
      lg:justify-center
      lg:text-center
      xl:items-start
      xl:justify-between
      xl:text-left
    ">
      
      {/* Background Image */}
      <Image
        src="/quote-bg.svg"
        width={1000}
        height={1000}
        alt="quote-bg"
        className="w-full h-full object-cover absolute top-0 left-0 z-0 pointer-events-none"
      />

      {/* Left Section: Heading, Avatars, Desktop Button */}
      <div className="
        relative
        z-10
        flex
        flex-col
        items-center
        xl:items-start
        w-full
        xl:w-1/2
        gap-10
        order-1
      ">
        
        <div className="flex flex-col gap-8 w-full max-w-xl">
          <h2 className="
            text-white
            text-4xl sm:text-5xl lg:text-5xl xl:text-6xl
            font-bold
            leading-tight
            text-center xl:text-left
            lg:mt-5
            xl:mt-0
          ">
            Build Faster.<br />Build Smarter.<br />Start Today.
          </h2>

          <Avatars />
        </div>

        {/* Desktop Only Button */}
        <div className="hidden xl:block">
          <Button
            color="primary"
            href="#"
            variant="flat"
            className="
              bg-[#0B2404]
              text-[#B1EC02]
              font-semibold
              text-lg
              flex justify-center items-center
              gap-2
              py-7 px-6
              rounded-full
              border border-[#B1EC02]
            "
            endContent={
              <Image
                src="/icons/arrowgreen.svg"
                width={20}
                height={20}
                alt="call-arrow"
                className="w-5 object-contain"
              />
            }
          >
            Prefer to book a call?
          </Button>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="
        relative
        z-10
        w-full
        max-w-xl
        xl:max-w-none
        xl:w-1/2
        order-2
      ">
        <ContactForm />
      </div>

      {/* Mobile & LG Button at very bottom */}
      <div className="block xl:hidden w-full max-w-xl mx-auto order-3">
        <Button
          color="primary"
          href="#"
          variant="flat"
          className="
            bg-[#0B2404]
            text-[#B1EC02]
            font-semibold
            w-full
            text-lg
            flex justify-center items-center
            gap-2
            py-7 px-6
            rounded-full
            border border-[#B1EC02]
          "
          endContent={
            <Image
              src="/icons/arrowgreen.svg"
              width={20}
              height={20}
              alt="call-arrow"
              className="w-5 object-contain"
            />
          }
        >
          Prefer to book a call?
        </Button>
      </div>
    </div>
  );
}

export default Page;
