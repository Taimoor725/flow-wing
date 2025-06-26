// components/HeroSection.jsx

import React from 'react';

const Stats = () => {
  return (
    <div className="h-[45vh] flex flex-col justify-center items-start px-8 py-16 ">
      <div className="text-left mb-12 px-32">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-black leading-tight">
          Trusted. Proven. Delivered.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#0B2404CC]">
          Where vision meets measurable impact.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0 px-32">
        <div className="text-center md:text-left">
          <p className="text-5xl font-bold bg-gradient-to-l to-[#7DFF6C] from-[#03562D] bg-clip-text text-transparent">+120</p>
          <p className="text-lg text-[#0B2404B2]">Faster Onboarding</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-5xl font-bold bg-gradient-to-l to-[#7DFF6C] from-[#03562D] bg-clip-text text-transparent">+5M</p>
          <p className="text-lg text-[#0B2404B2]">Faster Onboarding</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-5xl font-bold bg-gradient-to-l to-[#7DFF6C] from-[#03562D] bg-clip-text text-transparent">+20</p>
          <p className="text-lg text-[#0B2404B2]">Faster Onboarding</p>
        </div>
      </div>

      <div>
        {/* <button className="px-8 py-4 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
          <span>Contact us</span>
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default Stats;