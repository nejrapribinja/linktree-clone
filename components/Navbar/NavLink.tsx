"use client";
import React, { useState } from "react";

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
        className="flex items-center font-medium text-[15px] hover:text-primary transition ease-in-out duration-[350ms] ">
        {title}
      </a>
      {/* Sublinks */}
      {isHovered && subLinks && (
        <ul className="lg:absolute inline-block w-[250px]  rounded-md top-16 left-0 bg-white lg:px-6 py-4">
          {subLinks.map((subLink: any, index: number) => (
            <li key={index} className="py-2">
              <a
                href={subLink.path}
                className="block text-textColor text-[15px] hover:text-primary transition ease-in-out duration-[350ms]">
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
