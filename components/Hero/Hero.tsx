import Image from "next/image";
import dynamic from "next/dynamic";
const HeroContent = dynamic(() => import("./HeroContent"));

const Hero = () => {
  return (
    <div className="min-h-screen  bg-herobg" id="home">
      <HeroContent />
    </div>
  );
};

export default Hero;
