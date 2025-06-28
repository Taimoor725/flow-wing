import { Button } from "@heroui/react";
import Image from "next/image";
import FeatureCard from "./FeatureCard";

function Feature() {
  return (
    <div className="w-screen relative overflow-hidden" id="feature">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/feature/feature-bg.svg"
          alt="feature-bg"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-0">
        <ButtonUI />
        <CardSection />
      </div>
    </div>
  );
}

export default Feature;



const ButtonUI = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 mt-20 lg:mt-40">
      <Button className="flex justify-center items-center bg-white px-6 py-6 shadow-2xl border border-gray-300 rounded-[40px] hover:cursor-pointer">
        <Image
          src="/icons/bolt.svg"
          alt="bolt-icon"
          width={48}
          height={48}
          className="w-9 h-9 lg:w-12 lg:h-12 object-cover"
        />
        <div className="text-lg lg:text-2xl font-extralight text-[#0B2404] ml-2">
          Explore Features
        </div>
      </Button>

      <div className="flex flex-col justify-center items-center text-center gap-6 w-[90vw] lg:w-[70%]">
        <h2 className="text-4xl lg:text-8xl font-extrabold text-white">
          What Sets Us Apart
        </h2>
        <p className="text-lg lg:text-2xl font-extralight text-white/70 max-w-[65ch]">
          Built for real-world teams. Ready to deploy across 30+ chains, with enterprise-grade compliance from day one.
        </p>
      </div>
    </div>
  );
};




const CardDetails = [
  { img: "/feature/cards/card-1.svg", name: "Launch Instantly", dis: "Execute your vision and hit the market in days—not months." },
  { img: "/feature/cards/card-2.svg", name: "Zero Hassle Web3", dis: "No gas fees. No approvals. No blockchain friction—just smooth, intuitive experiences." },
  { img: "/feature/cards/card-3.svg", name: "Bank-grade Security", dis: "Powered by the same cutting-edge tech securing billions for top institutions." },
  { img: "/feature/cards/card-4.svg", name: "Analytics and Dashboards", dis: "Track users, wallets, and tokens—all in one powerful, real-time view." },
  { img: "/feature/cards/card-5.svg", name: "Enterprise Ready", dis: "Stay compliant with VASP, SOC-2, GDPR—plus SLAs and dedicated enterprise support." },
  { img: "/feature/cards/card-6.svg", name: "30+ Chains", dis: "Integrate with 30+ EVM chains, Solana, Sui, Aptos, and more on-demand." },
];

const CardSection = () => {
  return (
    <div className="w-full py-20 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 w-[95vw] max-w-[1400px]">
        {CardDetails.map((item, index) => (
          <FeatureCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
