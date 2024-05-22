import { HERO_TEXT, HERO_DESC, HERO_BTN } from "@/utils/content";
import dynamic from "next/dynamic";
const CustomButton = dynamic(() => import("../CustomButton"));

const HeroContent = () => {
  return (
    <div className="absolute h-screen w-full flex justify-start items-center md:px-8 px-4">
      <div className="xl:ml-[136.6px] text-white w-[648px] min-h-[40%]">
        <p
          className="md:text-[55px] text-herotext tracking-[-0.02em] leading-tight text-[32px] font-[820] md:mb-8 mb-[10px]"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back">
          {HERO_TEXT}
        </p>
        <p
          className="md:mb-[47px] mb-[40px] text-base text-herotext"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="150">
          {HERO_DESC}
        </p>
        <div
          className="flex flex-row button-row button-row-hero"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="150">
          <input
            type="text"
            className="bg-white font-normal px-4 py-5 border border-gray-300 rounded-lg mr-2"
            placeholder="linktr.ee/yourname"
          />
          <CustomButton
            text={HERO_BTN}
            className="transform scale-100 hover:scale-95 bg-herobtn rounded-full text-lg hover:bg-primary transition-all duration-[350ms] ease-in-out border border-solid  hover:border-transparent py-[24px] px-[44px] text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
