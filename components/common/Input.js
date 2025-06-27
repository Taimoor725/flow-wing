import React from 'react';

export default function InputField() {
  return (
    <div className="flex items-center w-[90%] max-w-md mx-auto h-16 px-6 rounded-full bg-[#FFFFFF1A] border border-[#3d5c4c] shadow-lg font-inter">

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full h-full outline-none border-none bg-transparent text-white placeholder-gray-400 text-lg"
      />
    </div>
  );
}