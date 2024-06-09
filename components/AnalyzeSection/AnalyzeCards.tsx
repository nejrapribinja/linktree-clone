import Image from "next/image";
import { SHARE_SOCIAL_0 } from "@/utils/content";

const AnalyzeCards = () => {
  return (
    <div className="flex-1 flex justify-center items-center pt-10">
      <Image src={SHARE_SOCIAL_0} alt="null" width={200} height={200} />
    </div>
  );
};

export default AnalyzeCards;
