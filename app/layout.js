import { Outfit } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import Nav from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import { Button } from "@heroui/react";
import Image from "next/image";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
        data-new-gr-c-s-check-loaded="14.1241.0"
        data-gr-ext-installed=""
      >
        <HeroUIProvider>
          <div className="z-20 w-full text-xl lg:h-[6vh] h-[10vh] bg-[#B1EC02] flex justify-center items-center text-black gap-5 lg:p-0 px-4">
            <Button className="lg:w-[6rem] w-[4rem] flex justify-center items-center text-white p-5 rounded-3xl bg-black lg:text-base text-sm">Hiring</Button>
            <div className="text-[#0B2404] lg:text-base text-sm">
              <span className="lg:font-extrabold font-bold">We’re hiring!</span> Help us turn every business into a blockchain native.
            </div>
            <Image src={"/icons/arrow.svg"} width={300} height={100} alt="arrow" className="w-5 h-5 object-cover" />
          </div>
          <Nav />
          {children}
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
