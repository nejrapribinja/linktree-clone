import { SHARE_TEXT, SHARE_DESC, SHARE_BTN } from "@/utils/content";
import dynamic from "next/dynamic";
const ShareCards = dynamic(() => import("./ShareCards"));
const CustomButton = dynamic(() => import("../CustomButton"));

const ShareContent = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row md:px-8 px-4 bg-sharebg pb-10">
      <div className="flex-1 flex justify-start items-center">
        <div className="xl:ml-[136.6px] text-white w-[648px] min-h-[40%]">
          <p className="md:text-[56px] text-createbg tracking-[-0.02em] leading-tight text-[32px] font-[820] md:mb-8 mb-[10px] pt-20">
            {SHARE_TEXT}
          </p>
          <p className="md:mb-[47px] mb-[40px] text-base text-createbg">{SHARE_DESC}</p>
          <div className="flex flex-row button-row button-row-hero">
            <CustomButton
              text={SHARE_BTN}
              className="transform scale-100 hover:scale-95 bg-createbg rounded-full text-lg hover:bg-primary transition-all duration-[350ms] ease-in-out border border-solid hover:border-transparent py-[24px] px-[44px] text-black"
            />
          </div>
        </div>
      </div>
      <ShareCards />
    </div>
  );
};

export default ShareContent;
