import dynamic from "next/dynamic";
import { BUTTON_TITLE_NAV1, BUTTON_TITLE_NAV2 } from "@/utils/content";
const NavLink = dynamic(() => import("./NavLink"));
const CustomButton = dynamic(() => import("../CustomButton"));

interface NavLinkItem {
  title: string;
  path: string;
  subLinks?: any;
}

interface MenuOverlayProps {
  links: NavLinkItem[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 px-6 items-stretch fixed top-[var(--navbar-height)] bg-mobileMenu w-screen h-[calc(100vh-var(--navbar-height))] z-10">
      {links.map((link, index: number) => (
        <li key={index} className="py-[15px]">
          <NavLink href={link.path} title={link.title} subLinks={link.subLinks} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
