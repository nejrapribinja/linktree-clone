import dynamic from "next/dynamic";
const HeroContent = dynamic(() => import("./HeroContent"));

const Hero = () => {
  return (
    <div className="h-[900px] bg-herobg" id="home">
      <HeroContent />
    </div>
  );
};

export default Hero;
