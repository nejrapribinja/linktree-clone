"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, BUTTON_TITLE_NAV1, BUTTON_TITLE_NAV2 } from "@/utils/content";
import Image from "next/image";
import dynamic from "next/dynamic";
import { SiLinktree } from "react-icons/si";

const MenuOverlay = dynamic(() => import("./MenuOverlay"));
const NavLinkList = dynamic(() => import("./NavLinkList"));
const MobileMenu = dynamic(() => import("./MobileMenu"));
const CustomButton = dynamic(() => import("../CustomButton"));

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setNavbarOpen(window.innerWidth <= 1024 ? navbarOpen : false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navbarOpen]);

  return (
    /* Navbar */
    <nav className="bg-white fixed top-0 left-1/2 transform -translate-x-1/2 z-10 mx-auto max-w-[90%] w-full rounded-full mt-10 px-6">
      <div className="flex flex-wrap items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link href={"/"} className="flex items-center">
            {/* <Image
              priority
              src={LOGO}
              alt="logo"
              width={221}
              height={31}
              className="transform scale-100 hover:scale-95 transition-transform duration-[350ms]"
            /> */}
            <p className="text-[28px] font-semibold">Linktree</p>
            <SiLinktree className={`w-5 h-5 ml-1 transform transition-transform duration-300`} />
          </Link>
          {/* Navlink List */}
          <NavLinkList />
        </div>

        <div className="flex gap-5">
          <div className="menu hidden md:inline text-right" id="navbar">
            <CustomButton
              text={BUTTON_TITLE_NAV1}
              className="transform scale-100 hover:scale-95 transition-transform duration-[350ms] bg-herobtn text-black py-[18px] px-[30px] rounded-lg"
            />
            <CustomButton
              text={BUTTON_TITLE_NAV2}
              className="transform scale-100 hover:scale-95 transition-transform duration-[350ms] bg-black ml-2 text-white py-[18px] px-[30px] rounded-full"
            />
          </div>

          {/* Mobile menu */}
          <MobileMenu isOpen={navbarOpen} toggleMenu={() => setNavbarOpen(!navbarOpen)} />
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={NAV_LINKS} /> : null}
    </nav>
  );
};

export default Navbar;
