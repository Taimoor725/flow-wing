import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";

export default function ExecutionCards1() {
  return (
    <Card className="w-full max-w-[95vw] lg:w-[95vw]  xl:max-w-full xl:h-[55vh] lg:h-[52vh] flex lg:flex-row flex-col border border-[#5EDD4D]/30 rounded-[20px] lg:rounded-[40px] bg-white overflow-hidden relative shadow-2xl">
      <Image src="/execution/cards/left-corner.svg" alt="corner" width={200} height={200} className="absolute top-0 left-0 object-cover" />

      <CardBody className="lg:hidden block w-full h-full p-0">
        <Image
          alt="Card background"
          className="h-full w-full object-cover"
          src="/execution/cards/card1.svg"
          width={1000}
          height={700}
        />
      </CardBody>

      <CardHeader className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-4 lg:px-2 xl:px-4 sm:px-6 md:px-8 lg:pl-10 xl:pl-16 _lg:pr-10">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold text-[#0B2404] break-words">
          One DEX, Every Chain
        </div>
        <div className="text-sm sm:text-base xl:text-xl lg:text-base font-light text-[#0B2404B2] leading-relaxed">
          Coliseum is a blazing-fast cross-chain DEX aggregator, unifying Chainflip, 0x, and Jupiter for seamless multi-chain trading. With embedded wallets and real-time portfolio management, it delivers borderless DeFi — fast, frictionless, and unstoppable.
        </div>
        <div className="w-full h-[2px] bg-[#1111111A] my-3 lg:my-1"></div>

        <div className="flex gap-5 _flex-wrap justify-center">
          <div className="flex flex-col items-center">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-5xl">$250K+</div>
            <div className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl text-[#0B2404B2] font-medium">In Trading Volume</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-5xl">20+</div>
            <div className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl text-[#0B2404B2] font-medium">Chains Integrated</div>
          </div>
        </div>
      </CardHeader>

      <CardBody className="hidden lg:block w-1/2 h-full p-0">
        <Image
          alt="Card background"
          className="h-full w-full object-cover"
          src="/execution/cards/card1.svg"
          width={1000}
          height={700}
        />
      </CardBody>
    </Card>
  );
}
