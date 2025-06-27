import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";

export default function ExecutionCard2() {
    return (
        <Card className="lg:w-[90%] w-[90vw] lg:h-[50vh] flex lg:flex-row flex-col border border-[#5EDD4D]/30 rounded-[40px] bg-white overflow-hidden relative shadow-2xl">

            <Image src={"/execution/cards/right-corner.svg"} alt="corner" width={200} height={200} className="object-cover absolute top-0 right-[2px]" />

            <CardBody className="lg:w-1/2 w-full h-full p-0">
                <Image
                    alt="Card background"
                    className="h-full w-full object-cover"
                    src={"/execution/cards/card2.svg"}
                    width={1000}
                    height={700}
                />
            </CardBody>

            <CardHeader className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-5 lg:px-16 px-5">
                <div className="lg:text-5xl text-4xl font-bold text-[#0B2404] lg:pr-5">Cross-Chain Raffles, Engineered for Scale</div>
                <div className="text-base font-light text-[#0B2404B2]">We built a cross-chain NFT raffle system that shattered barriers — 100,000+ tickets, ultra-low gas, and instant bridging. Raffle, wrap, and win across networks without the wait or the cost.</div>

                <div className="w-full h-[2px] bg-[#1111111A] lg:my-5 my-2"></div>

                <div className="flex gap-10 justify-center lg:mb-0 mb-5">
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold lg:text-5xl text-3xl">100,000+</div>
                        <div className="lg:text-xl text-base text-[#0B2404B2] font-medium">Tickets Sold</div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold lg:text-5xl text-3xl">93.3%</div>
                        <div className="lg:text-xl text-base text-[#0B2404B2] font-medium">Lowered Costs</div>
                    </div>

                </div>
            </CardHeader>

        </Card>
    );
}
