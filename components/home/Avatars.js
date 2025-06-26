import Image from 'next/image';
import React from 'react';

function Avatars() {
    return (
       
            <div className=" w-[40rem] h-[4rem] flex justify-center items-center">
                {/* Overlapping Avatars */}
                <div className='h-full relative w-1/2'>
                    <Image
                        src="/avtar/2.jpg"
                        width={60}
                        height={60}
                        alt='avtars'
                        className="min-w-16 min-h-16 rounded-full object-cover  absolute left-44 z-[10] border-gray-400 border-1"
                    />
                    <Image
                        src="/avtar/3.jpg"
                        width={60}
                        height={60}
                        alt='avtars'
                        className="min-w-16 min-h-16 rounded-full object-cover absolute left-52 z-[20] border-gray-400 border-1"
                    />
                    <Image
                        src="/avtar/1.jpg"
                        width={60}
                        height={60}
                        alt='avtars'
                        className="min-w-16 min-h-16 rounded-full object-cover absolute left-60 z-[30] border-gray-400 border-1"
                    />
                </div>

                <div className='text-3xl font-extralight text-[#F9FFFACC] w-1/2'>
                    Blockchain Agency
                </div>
            </div>

    );
}

export default Avatars;


export const Text = () => {
  return (
    <div className='flex flex-col w-full gap-5'>
    <div className="w-full flex justify-center items-center text-center">
      <div className="text-7xl md:text-8xl font-bold text-[#F9FFFA]">
        Engineering Blockchains <br />
        For{" "}
        <span className="bg-gradient-to-b from-[#2BCD00] to-[#F9FFFAB2] bg-clip-text text-transparent">
          Enterprises
        </span>
      </div>
      
    </div>

    <div className='w-full flex justify-center items-center'>
            <div className='w-[30%] text-lg text-center text-[#F9FFFACC]'>
                Launch powerful, frictionless Web3 experiences in days <span className='text-white font-bold'>— not months.</span> Seamless, secure, and enterprise-grade, built to scale without limits.
            </div>
      </div>
    </div>
  );
};
