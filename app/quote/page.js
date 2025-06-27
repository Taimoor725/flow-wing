import Avatars from '@/components/quote/Avtar1';
import React from 'react';
import { Button } from '@heroui/react';
import Image from 'next/image';
import ContactForm from '@/components/quote/Form';

function page() {
    return (
        <div className="min-h-screen bg-[#0B2404] overflow-x-hidden relative border-b border-[#FFFFFF33] px-5 lg:px-32 lg:py-32 py-20 flex flex-col lg:flex-row gap-12">
            {/* Background Image */}
            <Image
                src="/quote-bg.svg"
                width={1000}
                height={1000}
                alt="quote-bg"
                className="w-full h-full object-cover absolute top-0 left-0 z-0 pointer-events-none"
            />



            {/* Left Section: Text + Avatars + Button (all stacked) */}
            <div className="relative z-10 flex flex-col justify-between items-start w-full lg:w-1/2 gap-10 order-1 lg:order-1">
                {/* Text + Avatars */}
                <div className="flex flex-col gap-8 order-1 lg:w-auto w-[90vw]">
                    <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight flex lg:text-start text-center lg:justify-start justify-center">
                        Build Faster.<br />Build Smarter.<br />Start Today.
                    </h2>
                    <Avatars />
                </div>

                {/* Button (goes to bottom on mobile, stays where it is on desktop) */}
                <div className="order-3 w-full lg:w-auto lg:block hidden">
                    <Button
                        color="primary"
                        href="#"
                        variant="flat"
                        className="bg-[#0B2404] text-[#B1EC02]  font-semibold w-full sm:w-auto text-lg flex justify-center items-center gap-2 py-7 px-6 rounded-full border border-[#B1EC02]"
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

            

            {/* Right Section: Contact Form */}
            <div className="relative z-10 w-full lg:w-1/2 order-2 lg:order-2">
                <ContactForm />
            </div>


            {/* button at the bottom in the mobile view */}
            <div className="order-3 w-full lg:w-auto lg:hidden block">
                <Button
                    color="primary"
                    href="#"
                    variant="flat"
                    className="bg-[#0B2404] text-[#B1EC02]  font-semibold w-full sm:w-auto text-lg flex justify-center items-center gap-2 py-7 px-6 rounded-full border border-[#B1EC02]"
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

export default page;
