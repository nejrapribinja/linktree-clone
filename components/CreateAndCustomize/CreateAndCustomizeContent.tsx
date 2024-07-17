import { CREATE_TEXT, CREATE_DESC, CREATE_BTN } from "@/utils/content";
import dynamic from "next/dynamic";
const HeroPerson = dynamic(() => import("../Hero/HeroPerson"));
const CustomButton = dynamic(() => import("../CustomButton"));

const HeroContent = () => {
  return (
    <div className="lg:min-h-screen w-full flex flex-col lg:flex-row md:px-8 px-4 bg-createbg pb-10">
      {/* <HeroPerson /> */}
      <div className="flex-1 flex justify-start items-center">
        <div className="xl:ml-[136.6px] text-white w-[648px] min-h-[40%]">
          <p className="md:text-[60px] text-createtext tracking-[-0.02em] leading-tight text-[32px] font-[820] md:mb-8 mb-[10px] pt-20">
            {CREATE_TEXT}
          </p>
          <p className="md:mb-[47px] mb-[40px] text-base text-createtext">{CREATE_DESC}</p>
          <div className="flex flex-row button-row button-row-hero">
            <CustomButton
              text={CREATE_BTN}
              className="transform scale-100 hover:scale-95 bg-createtext rounded-full text-lg hover:bg-primary transition-all duration-[350ms] ease-in-out border border-solid hover:border-transparent py-[24px] px-[44px] text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
