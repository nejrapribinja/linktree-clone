import { IoIosMenu } from "react-icons/io";
interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div className="mobile-menu block lg:hidden">
      <div
        onClick={toggleMenu}
        className=" p-3 h-full  cursor-pointer flex justify-center items-center transform scale-100 hover:scale-95 transition-transform duration-[350ms]">
        {/* <a
          className={`flex flex-col h-[22px] w-[25px] justify-between menu-trigger anim ${
            isOpen ? "active" : ""
          }`}
          href="#"
          aria-label="menu icon">
          <span></span>
          <span></span>
          <span></span>
        </a> */}
        <IoIosMenu className={`w-6 h-6  ${isOpen ? "active" : ""}`} />
      </div>
    </div>
  );
};

export default MobileMenu;
