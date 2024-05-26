import dynamic from "next/dynamic";
const HeroContent = dynamic(() => import("./HeroContent"));

const Hero = () => {
  return (
    <div className="h-[800px] bg-herobg flex justify-center items-center" id="home">
      <HeroContent />
    </div>
  );
};

export default Hero;
