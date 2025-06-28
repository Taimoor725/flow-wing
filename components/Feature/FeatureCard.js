import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";

export default function FeatureCard({ item }) {
  return (
    <Card className="w-full max-w-[28rem] border-[gray]/30 border rounded-[20px] bg-white flex flex-col gap-4 overflow-hidden">
      <CardBody className="p-0">
        <Image
          alt="Card image"
          src={item.img}
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-t-[20px]"
        />
      </CardBody>

      <CardHeader className="pt-3 px-5 pb-5 flex flex-col gap-3 items-start">
        <h3 className="text-xl lg:text-3xl font-bold text-[#0B2404] break-words">
          {item.name}
        </h3>
        <p className="text-sm lg:text-xl font-light text-[#0B2404B2] break-words">
          {item.dis}
        </p>
      </CardHeader>
    </Card>
  );
}
