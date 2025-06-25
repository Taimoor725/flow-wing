import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image
} from "@heroui/react";

export default function NavBar() {
  return (
    <Navbar className="flex justify-between items-center w-[70rem] h-[5rem] border-[#FFF25066] bg-[#0B2404] border-[1px] rounded-[3rem] absolute top-20 z-10 left-1/2 -translate-x-1/2">
      <NavbarBrand>
        <Image
          src="/logo.svg"
          alt="FlowWing"
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
            className="bg-[#B1EC02] text-black font-semibold w-[10rem] text-lg flex justify-center items-center gap-2 py-6 rounded-full"
            endContent={<Image src="/icons/arrow.svg" className="w-4"/>}
          >
            Get a Quote
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}