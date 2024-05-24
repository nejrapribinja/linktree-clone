"use client";
import { HERO_TEXT, HERO_DESC, HERO_BTN, hero_bg, hero_widget, hero_item } from "@/utils/content";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const CustomButton = dynamic(() => import("../CustomButton"));

const HeroContent = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (event: any) => {
    const { clientX: x, clientY: y } = event;
    const rotateX = (window.innerHeight / 2 - y) / 10;
    const rotateY = (x - window.innerWidth / 2) / 10;
    setRotation({ rotateX, rotateY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute lg:min-h-screen w-full flex flex-col lg:flex-row md:px-8 px-4 bg-herobg">
      <div className="flex-1 flex justify-start items-center">
        <div className="xl:ml-[136.6px] text-white w-[648px] min-h-[40%]">
          <p className="md:text-[55px] text-herotext tracking-[-0.02em] leading-tight text-[32px] font-[820] md:mb-8 mb-[10px] pt-20">
            {HERO_TEXT}
          </p>
          <p className="md:mb-[47px] mb-[40px] text-base text-herotext">{HERO_DESC}</p>
          <div className="flex flex-row button-row button-row-hero">
            <input
              type="text"
              className="bg-white font-normal px-4 py-5 border border-gray-300 rounded-lg mr-2"
              placeholder="linktr.ee/yourname"
            />
            <CustomButton
              text={HERO_BTN}
              className="transform scale-100 hover:scale-95 bg-herobtn rounded-full text-lg hover:bg-primary transition-all duration-[350ms] ease-in-out border border-solid hover:border-transparent py-[24px] px-[44px] text-black"
            />
          </div>
        </div>
      </div>
      <div
        className="flex-1 flex justify-center items-center pt-20 bg-herobg image-container"
        style={{
          transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
          transition: "transform 650ms ease-out",
        }}>
        <Image
          src={hero_widget}
          alt="widget"
          width={105}
          height={311}
          className="z-20 transform translate-x-1/2 translate-y-1/2"
        />
        <Image src={hero_bg} alt="bg" width={205} height={311} className="z-10" />
        <Image
          src={hero_item}
          alt="item"
          width={105}
          height={311}
          className="z-0 transform -translate-y-1/2 -translate-x-1/3"
        />
      </div>
    </div>
  );
};

export default HeroContent;
