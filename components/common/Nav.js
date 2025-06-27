import React from "react";
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
  return (
    <Navbar className="flex justify-between items-center lg:w-[70rem] w-[95%] lg:h-[5rem] h-[3.5rem] border-[#FFF25066] bg-[#0B2404] border-[1px] rounded-[3rem] absolute top-20 z-10 left-1/2 -translate-x-1/2 lg:px-4 px-0">
      <NavbarBrand>
        <Image
          src="/logo.svg"
          alt="FlowWing"
          className="lg:w-40 w-28"
        />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8 text-xl font-extralight" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-[#F9FFFAB2]">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-[#F9FFFAB2]">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-[#F9FFFAB2]">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-[#F9FFFAB2]">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
        <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="bg-[#B1EC02] lg:flex hidden text-black font-semibold w-[10rem] text-lg justify-center items-center gap-2 py-6 rounded-full"
            endContent={<Image src="/icons/arrow.svg" className="w-4"/>}
          >
            Get a Quote
          </Button>


          <Chip
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="bg-[#B1EC02] flex lg:hidden  justify-center items-center w-[2.5rem] h-[2.5rem] rounded-full"
          >
            <Image src="/mob-nav.svg" className="w-4"/>
          </Chip>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}