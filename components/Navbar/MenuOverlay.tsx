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
    <ul className="fixed inset-0  flex flex-col p-4 items-stretch pt-[100px] z-[-1] bg-mobileMenu overflow-y-auto transform translate-x-0">
      {links.map((link, index: number) => (
        <li key={index} className="py-[15px]">
          <NavLink href={link.path} title={link.title} subLinks={link.subLinks} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
