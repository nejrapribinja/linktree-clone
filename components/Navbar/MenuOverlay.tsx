import dynamic from "next/dynamic";
import { BUTTON_TITLE } from "@/utils/content";
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
    <ul className="flex flex-col py-4 px-6 items-stretch z-20 absolute bg-white w-full">
      {links.map((link, index: number) => (
        <li key={index} className="py-[15px]">
          <NavLink href={link.path} title={link.title} subLinks={link.subLinks} />
        </li>
      ))}
      <li>
        <CustomButton
          text={BUTTON_TITLE}
          className="w-full transform scale-100 hover:scale-95 transition-transform duration-[350ms] mt-[60px] bg-primary py-[18px] px-[30px] text-base text-white"
        />
      </li>
    </ul>
  );
};

export default MenuOverlay;
