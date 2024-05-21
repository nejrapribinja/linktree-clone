/* import { HERO_TITLE, HERO_DESCRIPTION, HERO_BTN_TEXT, BUTTON_TITLE } from "@/utils/content";
import dynamic from "next/dynamic";
const CustomButton = dynamic(() => import("../CustomButton")); */

const HeroContent = () => {
  return (
    <div className="absolute h-screen w-full flex justify-start items-center md:px-8 px-4">
      {/* <div className="xl:ml-[136.6px] text-white w-[648px] min-h-[60%]">
        <p
          className="md:text-[55px] text-[32px] font-semibold md:mb-8 mb-[10px]"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back">
          {HERO_TITLE}
        </p>
        <p
          className="md:mb-[47px] mb-[40px] text-lg"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="150">
          {HERO_DESCRIPTION}
        </p>
        <div
          className="flex flex-row button-row button-row-hero"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="150">
          <CustomButton
            text={BUTTON_TITLE}
            className="transform button scale-100 hover:scale-95 transition-transform duration-[350ms] text-lg bg-primary mr-[26px] py-[24px] px-[44px] text-white"
          />
          <CustomButton
            text={HERO_BTN_TEXT}
            className="transform scale-100 hover:scale-95 bg-transparent text-lg hover:bg-primary transition-all duration-[350ms] ease-in-out border border-solid border-[#b9b9b9] hover:border-transparent py-[24px] px-[44px] text-white"
          />
        </div>
      </div> */}
    </div>
  );
};

export default HeroContent;
