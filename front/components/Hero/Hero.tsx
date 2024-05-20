import Image from "next/image";
import dynamic from "next/dynamic";
const HeroContent = dynamic(() => import("./HeroContent"));

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" id="home">
      <HeroContent />
    </div>
  );
};

export default Hero;
