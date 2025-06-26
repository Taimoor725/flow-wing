import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";

export default function ExecutionCard2() {
    return (
        <Card className="w-[90%] h-[50vh] flex flex-row border border-[#5EDD4D]/30 rounded-[40px] bg-white overflow-hidden relative shadow-2xl">

            <Image src={"/execution/cards/right-corner.svg"} alt="corner" width={200} height={200} className="object-cover absolute top-0 right-[2px]" />

            <CardBody className="w-1/2 h-full p-0">
                <Image
                    alt="Card background"
                    className="h-full w-full object-cover"
                    src={"/execution/cards/card2.svg"}
                    width={1000}
                    height={700}
                />
            </CardBody>

            <CardHeader className="w-1/2 flex flex-col justify-center items-start gap-5 px-16">
                <div className="text-5xl font-bold text-[#0B2404] pr-5">Cross-Chain Raffles, Engineered for Scale</div>
                <div className="text-base font-light text-[#0B2404B2]">We built a cross-chain NFT raffle system that shattered barriers — 100,000+ tickets, ultra-low gas, and instant bridging. Raffle, wrap, and win across networks without the wait or the cost.</div>

                <div className="w-full h-[2px] bg-[#1111111A] my-5"></div>

                <div className="flex gap-10 justify-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold text-5xl">100,000+</div>
                        <div className="text-xl text-[#0B2404B2] font-medium">Tickets Sold</div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold text-5xl">93.3%</div>
                        <div className="text-xl text-[#0B2404B2] font-medium">Lowered Costs</div>
                    </div>

                </div>
            </CardHeader>

        </Card>
    );
}
