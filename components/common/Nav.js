'use client';
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
  Chip
} from "@heroui/react";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsMobileMenuOpen(false);
    }, 300);
  };

  const shouldRenderMobileMenu = isMobileMenuOpen || isClosing;

  return (
    <>
      {/* Main Navbar */}
      <Navbar
        className="
          flex justify-between items-center
          w-[95%] max-w-screen-xl
          h-[3.5rem] sm:h-[4rem] lg:h-[5rem]
          border-[#FFF25066]
          bg-[#0B2404]
          border-[1px]
          rounded-[3rem]
          fixed z-[99]
          top-20 sm:top-12 lg:top-16
          left-1/2 -translate-x-1/2
          px-3 sm:px-4 lg:px-6
        "
      >
        <NavbarBrand>
          <Link href="/#home" className="text-[#F9FFFAB2]">
            <Image
              src="/logo.svg"
              alt="FlowWing"
              className="w-24 sm:w-32 lg:w-40"
            />
          </Link>
        </NavbarBrand>

        {/* Center nav links (hide on <md) */}
        <NavbarContent
          className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 text-base lg:text-lg xl:text-xl font-extralight"
          justify="center"
        >
          <NavbarItem>
            <Link href="/#service" className="text-[#F9FFFAB2]">Services</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/#project" className="text-[#F9FFFAB2]">Projects</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/#feature" className="text-[#F9FFFAB2]">About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/#contact" className="text-[#F9FFFAB2]">Contact</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="/quote"
              variant="flat"
              className="
                bg-[#B1EC02]
                text-black font-semibold
                hidden md:flex
                text-base lg:text-lg xl:text-xl
                w-[10rem] md:w-[10rem] lg:w-[13rem]
                justify-center items-center
                gap-2
                py-4 lg:py-5 xl:py-6
                rounded-full
              "
              endContent={<Image src="/icons/arrow.svg" className="w-4" />}
            >
              Get a Quote
            </Button>

            <Chip
              onClick={() => setIsMobileMenuOpen(true)}
              className="
                bg-[#B1EC02]
                flex md:hidden
                justify-center items-center
                w-10 h-10 rounded-full
              "
            >
              <Image src="/mob-nav.svg" className="w-4" />
            </Chip>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Mobile Slide-in Menu */}
      {shouldRenderMobileMenu && (
        <div
          className={`
            fixed inset-0 z-[100] bg-[#0B2404]
            flex flex-col justify-between p-6
            ${isClosing ? "animate-slide-out" : "animate-slide-in"}
          `}
        >
          {/* Top bar of mobile menu */}
          <Navbar
            className="
              flex justify-between items-center
              w-[95%] max-w-screen-xl
              h-[3.5rem] sm:h-[4rem]
              border-[#FFF25066]
              bg-[#0B2404]
              border-[1px]
              rounded-[3rem]
              absolute top-4 sm:top-6 z-[101]
              left-1/2 -translate-x-1/2
              px-3 sm:px-4
            "
          >
            <NavbarBrand>
              <Link href="#home" className="text-[#F9FFFAB2]">
                <Image src="/logo.svg" alt="FlowWing" className="w-24 sm:w-32" />
              </Link>
            </NavbarBrand>

            <NavbarContent justify="end">
              <NavbarItem>
                <Chip
                  onClick={closeMobileMenu}
                  className="
                    bg-[#B1EC02]
                    flex justify-center items-center
                    w-10 h-10 rounded-full
                  "
                >
                  <Image src="/close.svg" className="w-4" />
                </Chip>
              </NavbarItem>
            </NavbarContent>
          </Navbar>

          {/* Nav Links */}
          <div className="
            flex flex-col gap-6 mt-24
            text-white text-xl sm:text-2xl font-light
            self-start
          ">
            <Link href="/#service" onClick={closeMobileMenu}>Services</Link>
            <Link href="/#project" onClick={closeMobileMenu}>Projects</Link>
            <Link href="/#feature" onClick={closeMobileMenu}>About</Link>
            <Link href="/#contact" onClick={closeMobileMenu}>Contact</Link>
            <Button
              as={Link}
              href="/quote"
              variant="flat"
              className="
                bg-[#B1EC02]
                text-black font-semibold
                w-[10rem] sm:w-[10rem]
                text-lg sm:text-xl
                flex justify-center items-center
                gap-2
                py-5 sm:py-6
                rounded-full
              "
              endContent={<Image src="/icons/arrow.svg" className="w-4" />}
            >
              Get a Quote
            </Button>
          </div>

          {/* Social Media Chips */}
          <div className="w-full mt-10">
            <div className="flex gap-5 w-full justify-center">
              {["social1", "social2", "social3", "social4"].map((icon, i) => (
                <Chip
                  key={i}
                  className="
                    w-12 h-12 sm:w-14 sm:h-14
                    rounded-full
                    bg-[#0AAB15]/10
                    flex justify-center items-center
                    border border-[#0AAB151A]
                  "
                >
                  <img
                    src={`/footer/${icon}.svg`}
                    alt="social-icon"
                    className="w-6 h-6 object-cover"
                  />
                </Chip>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
