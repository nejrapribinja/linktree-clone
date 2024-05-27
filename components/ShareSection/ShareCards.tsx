import {
  SHARE_SOCIAL_0,
  SHARE_SOCIAL_1,
  SHARE_SOCIAL_2,
  SHARE_SOCIAL_3,
  SHARE_SOCIAL_4,
  SHARE_SOCIAL_5,
} from "@/utils/content";
import Image from "next/image";

const ShareCards = () => {
  return (
    <div className="flex justify-center items-center pt-20 image-container">
      <Image src={SHARE_SOCIAL_0} alt="bg" width={105} height={311} className="z-10" />
      <Image src={SHARE_SOCIAL_1} alt="widget" width={105} height={311} className="z-9 " />
      <Image src={SHARE_SOCIAL_2} alt="widget" width={105} height={311} className="z-8 " />
      <Image src={SHARE_SOCIAL_3} alt="widget" width={105} height={311} className="z-7 " />
      <Image src={SHARE_SOCIAL_5} alt="widget" width={105} height={311} className="z-6 " />
    </div>
  );
};

export default ShareCards;
