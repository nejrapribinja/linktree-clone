import {
  SHARE_SOCIAL_0,
  SHARE_SOCIAL_1,
  SHARE_SOCIAL_2,
  SHARE_SOCIAL_3,
  SHARE_SOCIAL_4,
  SHARE_SOCIAL_5,
} from "@/utils/content";
import Image from "next/image";

const AnalyzeCards = () => {
  return (
    <div className="flex-1 flex justify-center items-center pt-10">
      <Image src={SHARE_SOCIAL_0} alt="bg" width={185} height={311} className="z-10" />
    </div>
  );
};

export default AnalyzeCards;
