import {
  SLIDER_TITLE,
  comedy,
  funky,
  hbo,
  laclippers,
  pharrell,
  tonyhawk,
  selena,
} from "@/utils/content";
import Image from "next/image";

const Slider = () => {
  return (
    <div className=" min-h-[100vh] flex flex-col items-center">
      <p className="md:text-[56px] text-black tracking-[-0.02em] leading-tight text-[32px] pb-20 font-[820]">
        {SLIDER_TITLE}
      </p>
      <div className="flex">
        <Image src={comedy} alt="1" width={200} height={200} />
        <Image src={funky} alt="1" width={200} height={200} />
        <Image src={hbo} alt="1" width={200} height={200} />
        <Image src={laclippers} alt="1" width={200} height={200} />
        <Image src={tonyhawk} alt="1" width={200} height={200} />
        <Image src={selena} alt="1" width={200} height={200} />
        <Image src={pharrell} alt="1" width={200} height={200} />
      </div>
    </div>
  );
};

export default Slider;
