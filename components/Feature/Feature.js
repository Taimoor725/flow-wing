import { Button } from "@heroui/react"
import Image from "next/image"
import FeatureCard from "./FeatureCard"
import Stats from "./States"

function Feature() {
    return (
        <div className='w-screen h-auto _bg-[#0B2404] relative'>
            <Image src={'/feature/feature-bg.svg'} alt="feature-bg" width={1000} height={700} className="w-screen lg:h-[175vh] h-[465vh] object-cover absolute top-0 left-0 z-[0]"/>
            <ButtonUI />
            <CardSection />
        </div>
    )
}

export default Feature


const ButtonUI = () => {
    return (
        <div className="w-screen h-auto justify-center items-center flex flex-col gap-12 z-[10]">
            <Button className='lg:mt-40 mt-20 flex justify-center items-center bg-white lg:px-6 py-7 shadow-2xl border-[1px] border-gray-300 rounded-[40px] hover:cursor-pointer'>
                <Image src="/icons/bolt.svg" alt='service-button' width={100} height={100} className='lg:w-12 lg:h-12 w-9 h-9 object-cover' />
                <div className='lg:text-2xl text-lg font-extralight text-[#0B2404]'>Explore Features</div>
            </Button>

            {/* testimonials  */}
            <div className='flex flex-col w-[70%] justify-center items-center gap-10'>
                <div className=' lg:text-8xl  z-[20] text-4xl text-center font-extrabold text-white flex justify-center items-center'>
                    {/* What We Build */}
                    What Sets Us Apart
                </div>
                <div className=' text-center z-[20] lg:text-2xl text-lg font-extralight text-white/70 lg:w-[65%] w-[90vw]'>
                    {/* We craft blockchain systems that power industries, secure users, and push the edge of innovation. */}
                    Built for real-world teams. Ready to deploy across 30+ chains, with enterprise-grade compliance from day one.
                </div>
            </div>
        </div>
    )
}


const CardDetails = [
    { img: "/feature/cards/card-1.svg", name: "Launch Instantly", dis: "Execute your vision and hit the market in days—not months." },
    { img: "/feature/cards/card-2.svg", name: "Zero Hassle Web3", dis: "No gas fees. No approvals. No blockchain friction—just smooth, intuitive experiences." },
    { img: "/feature/cards/card-3.svg", name: "Bank-grade Security", dis: "Powered by the same cutting-edge tech securing billions for top institutions." },
    { img: "/feature/cards/card-4.svg", name: "Analytics and Dashboards", dis: "Track users, wallets, and tokens—all in one powerful, real-time view." },
    { img: "/feature/cards/card-5.svg", name: "Enterprise Ready", dis: "Stay compliant with VASP, SOC-2, GDPR—plus SLAs and dedicated enterprise support." },
    { img: "/feature/cards/card-6.svg", name: "30+ Chains", dis: "Integrate with 30+ EVM chains, Solana, Sui, Aptos, and more on-demand." },
]


const CardSection = () => {
    return (
        <div className="w-screen h-auto lg:px-32 flex justify-center mt-20 pb-32">
            <div className="lg:w-[79%] w-[90vw] lg:grid flex flex-col grid-cols-3 gap-12">
                {CardDetails.map((item, index) => (
                    <FeatureCard item={item} key={index} />
                ))}
            </div>
        </div>
    );
};
