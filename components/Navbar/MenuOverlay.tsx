import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("./NavLink"));

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
        <li key={index} className="py-[15px] text-herobg">
          <NavLink
            href={link.path}
            title={link.title}
            subLinks={link.subLinks}
            classNameLink="text-2xl font-extrabold tracking-[-0.01em]"
            classNameSublink="text-xl font-bold"
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
