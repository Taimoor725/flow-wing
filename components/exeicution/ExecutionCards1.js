import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";

export default function ExecutionCard1() {
    return (
        <Card className="w-[90%] h-[50vh] flex flex-row border border-[#5EDD4D]/30 rounded-[40px] bg-white overflow-hidden relative shadow-2xl">

            <Image src={"/execution/cards/left-corner.svg"} alt="corner" width={200} height={200} className="object-cover absolute top-0 left-0"/>


            <CardHeader className="w-1/2 flex flex-col justify-center items-start gap-5 pl-16">
                <div className="text-5xl font-bold text-[#0B2404] pr-16">One DEX, Every Chain</div>
                <div className="text-base font-light text-[#0B2404B2]">oliseum is a blazing-fast cross-chain DEX aggregator, unifying Chainflip, 0x, and Jupiter for seamless multi-chain trading. With embedded wallets and real-time portfolio management, it delivers borderless DeFi — fast, frictionless, and unstoppable.</div>

                <div className="w-full h-[2px] bg-[#1111111A] my-5"></div>

                <div className="flex gap-10 justify-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold text-5xl">$250K+</div>
                        <div className="text-xl text-[#0B2404B2] font-medium"> In Trading Volume</div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold text-5xl">20+</div>
                        <div className="text-xl text-[#0B2404B2] font-medium">Chains Integrated</div>
                    </div>

                </div>
            </CardHeader>


            <CardBody className="w-1/2 h-full p-0">
                <Image
                    alt="Card background"
                    className="h-full w-full object-cover"
                    src={"/execution/cards/card1.svg"}
                    width={1000}
                    height={700}
                />
            </CardBody>

        </Card>
    );
}
