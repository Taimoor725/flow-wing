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
    <div className="w-full flex justify-center items-end ">
      <div className="w-[90%] h-[15vh] flex flex-col items-center  gap-5 p-4 rounded-xl">
        <div className="text-xl font-medium text-[#FFFFFF66] ">
          Our practices are trusted by
        </div>
        <div className="flex justify-center items-center gap-7 flex-wrap">
          {logos.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Partner logo"
              className="w-52 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
