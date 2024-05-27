import { SHARE_SOCIAL_1 } from "@/utils/content";
import Image from "next/image";

const ShareCards = () => {
  return (
    <div className="flex-1 flex justify-center items-center pt-20 image-container">
      <Image src={SHARE_SOCIAL_1} alt="bg" width={205} height={311} className="z-10" />
    </div>
  );
};

export default ShareCards;
