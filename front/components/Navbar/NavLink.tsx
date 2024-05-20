"use client";
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface NavLinkProps {
  href: string;
  title: string;
  subLinks?: any;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, subLinks }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative">
      {/* Links */}
      <a
        href={href}
        className="flex items-center text-textColor lg:text-lg text-xl hover:text-primary transition ease-in-out duration-[350ms] ">
        {title}
        {subLinks && (
          <IoChevronDown
            className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
              isHovered ? "-rotate-180" : ""
            }`}
          />
        )}
      </a>
      {/* Sublinks */}
      {isHovered && subLinks && (
        <ul className="lg:absolute block z-10 top-full left-0 bg-white lg:p-6 pt-6">
          {subLinks.map((subLink: any, index: number) => (
            <li key={index}>
              <a
                href={subLink.path}
                className="block text-textColor text-lg hover:text-primary transition ease-in-out duration-[350ms] ">
                {subLink.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavLink;
