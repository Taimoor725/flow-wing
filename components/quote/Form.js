"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@heroui/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="lg:w-full w-[90vw] h-full p-3 sm:p-8 rounded-2xl shadow-xl bg-[#B1EC021A] ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full px-5 py-4 rounded-lg bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none border border-[#FFFFFF33] focus:ring-2 focus:ring-[#0AAB15]/40 transition duration-200"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full px-5 py-4 rounded-lg bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none border border-[#FFFFFF33] focus:ring-2 focus:ring-[#0AAB15]/40 transition duration-200"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="block appearance-none w-full bg-transparent border border-[#FFFFFF33] text-gray-100 py-4 px-5 pr-10 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-[#0AAB15]/40 transition duration-200"
          >
            <option value="" disabled>Select one...</option>
            <option value="general-inquiry">General Inquiry</option>
            <option value="support-request">Support Request</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-300">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mb-8">
        <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write here..."
          rows={6}
          className="w-full px-5 py-4 rounded-lg bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none border border-[#FFFFFF33] focus:ring-2 focus:ring-[#0AAB15]/40 transition duration-200 resize-y"
        />
      </div>

      {/* Submit */}
      <div className="w-full flex justify-start">
        <Button
          type="submit"
          color="primary"
          variant="flat"
          className="bg-[#B1EC02] text-black font-semibold w-full sm:w-[15rem] text-lg flex justify-center items-center gap-2 py-6 rounded-full hover:cursor-pointer"
          endContent={
            <Image
              src="/icons/arrow.svg"
              alt="arrow-icon"
              width={20}
              height={20}
              className="w-5 object-contain"
            />
          }
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
