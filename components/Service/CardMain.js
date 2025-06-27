import {Card, CardHeader, CardBody} from "@heroui/react";
import Image from "next/image";

export default function CardMain({item , props}) {
  return (
    <Card className={`lg:w-[33vw] lg:h-[45vh] border-[#5EDD4D]/30 border-[1px] rounded-[20px] bg-white flex flex-col gap-5 ${props}`}>
      <CardBody className="">
        <Image
          alt="Card background"
          className="object-cover rounded-t-3xl"
          src={item.img}
          width={600}
          height={600}
        />
      </CardBody>

      <CardHeader className=" pt-2 px-5 flex flex-col gap-3 items-start pb-3">
        <div className="text-2xl font-bold text-[#0B2404]">{item.name}</div>
        <div className="text-base  font-light text-[#0B2404B2]">{item.dis}</div>
      </CardHeader>
    </Card>
  );
}
