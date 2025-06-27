import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";

export default function ExecutionCard1() {
    return (
        <Card className="lg:w-[90%] w-[90vw] lg:h-[50vh] flex lg:flex-row flex-col border border-[#5EDD4D]/30 lg:rounded-[40px] rounded-[20px] bg-white overflow-hidden relative shadow-2xl">

            <Image src={"/execution/cards/left-corner.svg"} alt="corner" width={200} height={200} className="object-cover absolute top-0 left-0"/>


            <CardBody className="lg:w-1/2 w-full h-full p-0 lg:hidden block">
                <Image
                    alt="Card background"
                    className="h-full w-full object-cover"
                    src={"/execution/cards/card1.svg"}
                    width={1000}
                    height={700}
                />
            </CardBody>


            <CardHeader className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-5 lg:pl-16 pl-5">
                <div className="lg:text-5xl text-4xl font-bold text-[#0B2404] lg:pr-16">Next-Gen L2 with Real Scale</div>
                <div className="text-base font-light text-[#0B2404B2]">An Optimistic L2 with Ethereum security and Avail’s blazing-fast data layer — Colichain delivers speed without compromise. No tradeoffs — just faster, cheaper, and fully scalable transactions with real-time performance monitoring.</div>

                <div className="w-full h-[2px] bg-[#1111111A] lg:my-5 my-2"></div>

                <div className="flex gap-10 justify-center lg:mb-0 mb-5">
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold lg:text-5xl text-3xl">6X</div>
                        <div className="lg:text-xl text-base text-[#0B2404B2] font-medium">Faster</div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold lg:text-5xl text-3xl">10X</div>
                        <div className="lg:text-xl text-base text-[#0B2404B2] font-medium ">Cheaper to Operate</div>
                    </div>

                </div>
            </CardHeader>


            <CardBody className="w-1/2 h-full p-0 lg:block hidden">
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
