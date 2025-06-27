'use client';
import React, { useState, useEffect } from "react";
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
    }, 300); // matches animation duration
  };

  const shouldRenderMobileMenu = isMobileMenuOpen || isClosing;

  return (
    <>
      {/* Main Navbar */}
      <Navbar className="flex justify-between items-center lg:w-[70rem] w-[95%] lg:h-[5rem] h-[3.5rem] border-[#FFF25066] bg-[#0B2404] border-[1px] rounded-[3rem] lg:fixed absolute lg:top-16 top-20 z-[99] left-1/2 -translate-x-1/2 lg:px-4 px-0">
        <NavbarBrand>
          <Link color="foreground" href="/#home" className="text-[#F9FFFAB2]">
            <Image src="/logo.svg" alt="FlowWing" className="lg:w-40 w-28" />
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-8 text-xl font-extralight" justify="center">
          <NavbarItem><Link href="/#service" className="text-[#F9FFFAB2]">Services</Link></NavbarItem>
          <NavbarItem><Link href="/#project" className="text-[#F9FFFAB2]">Projects</Link></NavbarItem>
          <NavbarItem><Link href="/#feature" className="text-[#F9FFFAB2]">About</Link></NavbarItem>
          <NavbarItem><Link href="/#contact" className="text-[#F9FFFAB2]">Contact</Link></NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="/quote"
              variant="flat"
              className="bg-[#B1EC02] lg:flex hidden text-black font-semibold w-[10rem] text-lg justify-center items-center gap-2 py-6 rounded-full"
              endContent={<Image src="/icons/arrow.svg" className="w-4" />}
            >
              Get a Quote
            </Button>

            <Chip
              onClick={() => setIsMobileMenuOpen(true)}
              className="bg-[#B1EC02] mob-logo-class flex lg:hidden justify-center items-center w-[2.5rem] h-[2.5rem] rounded-full"
            >
              <Image src="/mob-nav.svg" className="w-4" />
            </Chip>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Mobile Slide-in Menu */}
      {shouldRenderMobileMenu && (
        <div
          className={`fixed inset-0 z-[100] bg-[#0B2404] flex flex-col justify-between p-6 ${
            isClosing ? "animate-slide-out" : "animate-slide-in"
          }`}
        >
          {/* Top mobile nav bar */}
          <Navbar className="flex justify-between items-center lg:w-[70rem] w-[95%] lg:h-[5rem] h-[3.5rem] border-[#FFF25066] bg-[#0B2404] border-[1px] rounded-[3rem] absolute top-2 z-[99] left-1/2 -translate-x-1/2 lg:px-4 px-0">
            <NavbarBrand>
              <Link href="#home" className="text-[#F9FFFAB2]">
                <Image src="/logo.svg" alt="FlowWing" className="lg:w-40 w-28" />
              </Link>
            </NavbarBrand>

            <NavbarContent justify="end">
              <NavbarItem>
                <Chip
                  onClick={closeMobileMenu}
                  className="bg-[#B1EC02] mob-logo-class flex lg:hidden justify-center items-center w-[2.5rem] h-[2.5rem] rounded-full"
                >
                  <Image src="/close.svg" className="w-4" />
                </Chip>
              </NavbarItem>
            </NavbarContent>
          </Navbar>

          {/* Nav Links */}
          <div className="flex flex-col gap-6 mt-20 text-white text-2xl font-light self-start">
            <Link href="/#service" onClick={closeMobileMenu}>Services</Link>
            <Link href="/#project" onClick={closeMobileMenu}>Projects</Link>
            <Link href="/#feature" onClick={closeMobileMenu}>About</Link>
            <Link href="/#contact" onClick={closeMobileMenu}>Contact</Link>
            <Button
              as={Link}
              href="/quote"
              variant="flat"
              className="bg-[#B1EC02] text-black font-semibold w-[10rem] flex text-lg justify-center items-center gap-2 py-6 rounded-full"
              endContent={<Image src="/icons/arrow.svg" className="w-4" />}
            >
              Get a Quote
            </Button>
          </div>

          {/* Social Media Chips */}
          <div className="w-full">
            <div className="flex gap-5 w-full justify-center">
              {["social1", "social2", "social3", "social4"].map((icon, i) => (
                <Chip key={i} className="w-14 h-14 rounded-full bg-[#0AAB15]/10 flex justify-center items-center border border-[#0AAB151A]">
                  <img src={`/footer/${icon}.svg`} alt="social-icon" className="w-7 h-7 object-cover" />
                </Chip>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
