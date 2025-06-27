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
    <div className="w-full flex justify-center items-end lg:-translate-y-0 -translate-y-14">
      <div className="w-[90%] h-[15vh] flex flex-col items-center lg:gap-5 gap-3 p-4 rounded-xl">
        <div className="text-xl text-[#FFFFFF66] font-light">
          Our practices are trusted by
        </div>
        <div className="flex justify-center items-center lg:gap-7 gap-5">
          {logos.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Partner logo"
              className="lg:w-52 min-w-28 object-cover lg:transalte-x-0 translate-x-16"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
