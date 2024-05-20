import dynamic from "next/dynamic";
import { NAV_LINKS } from "@/utils/content";
const NavLink = dynamic(() => import("./NavLink"));

const NavLinkList = () => {
  return (
    <div className="menu hidden lg:block lg:w-auto" id="navbar">
      <ul className="flex justify-center p-4 md:p-0 md:flex-row md:space-x-8 ">
        {NAV_LINKS.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} subLinks={link.subLinks} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinkList;
