import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";

export default function ExecutionCard2() {
  return (
    <Card className="w-full max-w-[95vw] lg:w-[95vw] xl:max-w-full xl:h-[55vh] lg:h-[52vh] flex lg:flex-row flex-col-reverse border border-[#5EDD4D]/30 rounded-[20px] lg:rounded-[40px] bg-white overflow-hidden relative shadow-2xl">
      <Image src="/execution/cards/right-corner.svg" alt="corner" width={200} height={200} className="absolute top-0 right-2 object-cover" />

      {/* Mobile Image */}
      <CardBody className="lg:hidden block w-full h-full p-0">
        <Image
          alt="Card background"
          className="h-full w-full object-cover"
          src="/execution/cards/card2.svg"
          width={1000}
          height={700}
        />
      </CardBody>


      {/* Desktop Image */}
      <CardBody className="hidden lg:block w-1/2 h-full p-0">
        <Image
          alt="Card background"
          className="h-full w-full object-cover"
          src="/execution/cards/card2.svg"
          width={1000}
          height={700}
        />
      </CardBody>

      <CardHeader className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-4 lg:px-2 xl:px-4 sm:px-6 md:px-8 lg:pl-16 xl:pl-20 _lg:pr-10">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold text-[#0B2404] break-words">
          Cross-Chain Raffles, Engineered for Scale
        </div>
        <div className="text-sm sm:text-base xl:text-xl lg:text-base font-light text-[#0B2404B2] leading-relaxed">
          We built a cross-chain NFT raffle system that shattered barriers — 100,000+ tickets, ultra-low gas, and instant bridging. Raffle, wrap, and win across networks without the wait or the cost.
        </div>
        <div className="w-full h-[2px] bg-[#1111111A] my-3 lg:my-1"></div>

        <div className="flex gap-5 _flex-wrap justify-center">
          <div className="flex flex-col items-center">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-5xl">100,000+</div>
            <div className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl text-[#0B2404B2] font-medium">Tickets Sold</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-5xl">93.3%</div>
            <div className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl text-[#0B2404B2] font-medium">Lowered Costs</div>
          </div>
        </div>
      </CardHeader>

      
    </Card>
  );
}
