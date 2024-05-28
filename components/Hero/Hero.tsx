import dynamic from "next/dynamic";
const HeroContent = dynamic(() => import("./HeroContent"));

const Hero = () => {
  return (
    <div className="lg:h-[100vh] bg-herobg flex justify-center items-center" id="home">
      <HeroContent />
    </div>
  );
};

export default Hero;
