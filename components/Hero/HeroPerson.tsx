"use client";
import { hero_bg, hero_widget, hero_item } from "@/utils/content";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroPerson = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (event: any) => {
    const { clientX: x, clientY: y } = event;
    const rotateX = (window.innerHeight / 2 - y) / 20;
    const rotateY = (x - window.innerWidth / 2) / 20;
    setRotation({ rotateX, rotateY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="flex-1 flex justify-center items-center pt-20 image-container"
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
  );
};

export default HeroPerson;
