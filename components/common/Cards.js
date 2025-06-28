import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";

export default function CardTemp({ item }) {
  return (
    <Card className="w-full  sm:max-w-[25rem] lg:max-w-[25vw] border-[#5EDD4D]/30 border-[1px] rounded-[20px] bg-white flex flex-col gap-5">
      <CardBody className="p-0">
        <Image
          alt="Card background"
          className="object-cover rounded-t-3xl w-full h-auto"
          src={item.img}
          width={500}
          height={500}
        />
      </CardBody>

      <CardHeader className="pt-2 px-5 flex flex-col gap-3 items-start pb-5">
        <div className="text-xl md:text-4xl font-bold text-[#0B2404] break-words">
          {item.name}
        </div>
        <div className="text-sm md:text-xl font-light text-[#0B2404B2] break-words">
          {item.dis}
        </div>
      </CardHeader>
    </Card>
  );
}
