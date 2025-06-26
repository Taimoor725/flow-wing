import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";

export default function ExecutionCard3() {
    return (
        <Card className="w-[90%] h-[50vh] flex flex-row border border-[#5EDD4D]/30 rounded-[40px] bg-white overflow-hidden relative shadow-2xl">

            <Image src={"/execution/cards/left-corner.svg"} alt="corner" width={200} height={200} className="object-cover absolute top-0 left-0"/>

            <CardHeader className="w-1/2 flex flex-col justify-center items-start gap-5 pl-16">
                <div className="text-5xl font-bold text-[#0B2404] pr-16">Next-Gen L2 with Real Scale</div>
                <div className="text-base font-light text-[#0B2404B2]">An Optimistic L2 with Ethereum security and Avail’s blazing-fast data layer — Colichain delivers speed without compromise. No tradeoffs — just faster, cheaper, and fully scalable transactions with real-time performance monitoring.</div>

                <div className="w-full h-[2px] bg-[#1111111A] my-5"></div>

                <div className="flex gap-10 justify-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold text-5xl">6X</div>
                        <div className="text-xl text-[#0B2404B2] font-medium">Faster</div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold text-5xl">10X</div>
                        <div className="text-xl text-[#0B2404B2] font-medium">Cheaper to Operate</div>
                    </div>

                </div>
            </CardHeader>

            <CardBody className="w-1/2 h-full p-0">
                <Image
                    alt="Card background"
                    className="h-full w-full object-cover"
                    src={"/execution/cards/card3.svg"}
                    width={1000}
                    height={700}
                />
            </CardBody>

        </Card>
    );
}
