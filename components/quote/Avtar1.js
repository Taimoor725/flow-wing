'use client';
import Image from 'next/image';
import React from 'react';

function Avatars() {
  return (
    <div className="
      w-full
      max-w-3xl
      h-auto
      flex
      flex-col
      items-center
      lg:flex-row
      lg:items-center
      lg:justify-start
      gap-4
    ">
      
      {/* Avatars Row */}
      <div className="
        flex
        items-center
        justify-center
        lg:justify-start
        space-x-[-0.75rem]
        lg:space-x-[-1.5rem]
      ">
        <Image
          src="/avtar/2.jpg"
          width={60}
          height={60}
          alt="avatar"
          className="
            w-10 h-10
            lg:w-16 lg:h-16
            rounded-full
            object-cover
            border border-gray-400
          "
        />
        <Image
          src="/avtar/3.jpg"
          width={60}
          height={60}
          alt="avatar"
          className="
            w-10 h-10
            lg:w-16 lg:h-16
            rounded-full
            object-cover
            border border-gray-400
          "
        />
        <Image
          src="/avtar/1.jpg"
          width={60}
          height={60}
          alt="avatar"
          className="
            w-10 h-10
            lg:w-16 lg:h-16
            rounded-full
            object-cover
            border border-gray-400
          "
        />
      </div>

      {/* Text below avatars */}
      <div className="
        mt-4
        lg:mt-0
        text-center
        lg:text-left
        text-base
        lg:text-xl
        font-extralight
        text-[#F9FFFACC]
        w-full
        max-w-sm
      ">
        Our team will respond you within 24 hrs
      </div>
    </div>
  );
}

export default Avatars;
