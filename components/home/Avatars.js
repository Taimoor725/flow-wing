import Image from 'next/image';
import React from 'react';

function Avatars({text}) {
    return (
       
            <div className=" lg:w-[40rem] w-[37rem] h-[4rem] flex lg:flex-row flex-col justify-center items-center ">
                {/* Overlapping Avatars for dasktop*/} 
                <div className='h-full relative w-1/2 items-center  lg:block hidden'>
                    <Image
                        src="/avtar/2.jpg"
                        width={60}
                        height={60}
                        alt='avtars'
                        className="lg:min-w-16 lg:min-h-16 w-10 h-10 rounded-full object-cover  absolute left-44 z-[10] border-gray-400 border-1"
                    />
                    <Image
                        src="/avtar/3.jpg"
                        width={60}
                        height={60}
                        alt='avtars'
                        className=" lg:min-w-16 lg:min-h-16 w-10 h-10 rounded-full object-cover absolute left-52 z-[20] border-gray-400 border-1"
                    />
                    <Image
                        src="/avtar/1.jpg"
                        width={60}
                        height={60}
                        alt='avtars'
                        className=" lg:min-w-16 lg:min-h-16 w-10 h-10 rounded-full object-cover absolute left-60 z-[30] border-gray-400 border-1"
                    />
                </div>



                {/* Overlapping Avatars for mobile*/} 
                <div className='h-full relative w-1/2 justify-center items-center lg:hidden block'>
                    <Image
                        src="/avtar/2.jpg"
                        width={60}
                        height={60}
                        alt='avtars'
                        className="lg:min-w-16 lg:min-h-16 w-10 h-10 rounded-full object-cover  absolute left-24 top-[-3%] z-[10] border-gray-400 border-1"
                    />
                    <Image
                        src="/avtar/3.jpg"
                        width={60}
                        height={60}
                        alt='avtars'
                        className=" lg:min-w-16 lg:min-h-16 w-10 h-10 rounded-full top-[-3%] object-cover absolute left-32 z-[20] border-gray-400 border-1"
                    />
                    <Image
                        src="/avtar/1.jpg"
                        width={60}
                        height={60}
                        alt='avtars'
                        className=" lg:min-w-16 lg:min-h-16 w-10 h-10 rounded-full object-cover top-[-%3] absolute left-40 z-[30] border-gray-400 border-1"
                    />
                </div>





                <div className='lg:text-3xl text-xl font-extralight text-[#F9FFFACC] w-1/2'>
                    {text}
                </div>
            </div>

    );
}

export default Avatars;


export const Text = () => {
  return (
    <div className='flex flex-col w-full gap-5'>
    <div className="w-full flex justify-center items-center text-center">
      <div className="text-5xl md:text-8xl font-bold text-[#F9FFFA] _bg-[red]">
        Engineering Blockchains <br />
        For{" "}
        <span className="bg-gradient-to-b from-[#2BCD00] to-[#F9FFFAB2] bg-clip-text text-transparent">
          Enterprises
        </span>
      </div>
      
    </div>

    <div className='w-full flex justify-center items-center'>
            <div className='lg:w-[30%] lg:px-0 px-3  w-full lg:text-lg text-base text-center text-[#F9FFFACC] font-light'>
                Launch powerful, frictionless Web3 experiences in days <span className='text-white font-bold'>— not months.</span> Seamless, secure, and enterprise-grade, built to scale without limits.
            </div>
      </div>
    </div>
  );
};
