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
    <div className="flex-1 flex justify-center items-center pt-10">
      <div className="flex justify-center items-center " style={{ transform: "rotate(-10deg)" }}>
        <Image
          src={SHARE_SOCIAL_0}
          alt="bg"
          width={85}
          height={311}
          className="z-10"
          style={{ transform: "rotate(10deg)" }}
        />
        <Image
          src={SHARE_SOCIAL_1}
          alt="widget"
          width={85}
          height={311}
          className="z-9 "
          style={{ transform: "rotate(10deg)" }}
        />
        <Image
          src={SHARE_SOCIAL_2}
          alt="widget"
          width={85}
          height={311}
          className="z-8 "
          style={{ transform: "rotate(10deg)" }}
        />
        <Image
          src={SHARE_SOCIAL_3}
          alt="widget"
          width={85}
          height={311}
          className="z-7 "
          style={{ transform: "rotate(10deg)" }}
        />
      </div>
    </div>
  );
};

export default ShareCards;
