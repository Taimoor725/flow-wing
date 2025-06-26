'use client';
import Image from 'next/image';
import App from './Input';


export default function Footer() {
  return (
    <footer className="w-full h-[75vh] bg-[#0B2404] text-white p-28 flex flex-col gap-12">
        <div className='w-full h-2/3 flex'>
            {/* subscriber box */}
            <div className='flex flex-col w-[20vw] h-[35vh] bg-[#0AAB15]/10 border rounded-3xl border-[#0AAB151A] justify-center items-center'>
                <Image src={"/logo1.svg"} alt='logo1' width={100} height={100} className='w-12 object-cover'/> 

                <div className='flex flex-col justify-center items-center'>
                    <div className='text-base font-medium text-white'>Don’t miss and update</div>
                    <div className='text-base font-light text-[#FFFFFF99]'>Lorem ipsum is placeholder text.</div>
                </div>

                <App/>
            </div>      
        </div>
    </footer>
  );
}
