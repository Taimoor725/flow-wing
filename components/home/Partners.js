import React from 'react';
import { Image } from '@heroui/react';

function Partners() {
  const logos = [
    "/partner/part-1.svg",
    "/partner/part-2.svg",
    "/partner/part-3.svg",
    "/partner/part-4.svg",
    "/partner/part-5.svg",
    "/partner/part-6.svg",
  ];

  return (
    <div className="w-full flex justify-center items-end lg:translate-y-0 -translate-y-10">
      <div className="w-[90%] flex flex-col items-center gap-3 lg:gap-5 p-4 rounded-xl">
        
        {/* Heading */}
        <div className="text-sm sm:text-base lg:text-xl text-[#FFFFFF66] font-light text-center">
          Our practices are trusted by
        </div>

        {/* Logos Row */}
        <div className="flex justify-center items-center gap-5 lg:gap-7">
          {logos.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Partner logo ${index + 1}`}
              className={`
                object-contain
                transition-transform duration-300
                lg:w-40 w-24
                ${index > 2 ? 'hidden lg:inline-block' : ''}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
