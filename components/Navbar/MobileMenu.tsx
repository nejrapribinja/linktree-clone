import { IoIosMenu, IoIosClose } from "react-icons/io";
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
        {!isOpen ? (
          <IoIosMenu className={`w-6 h-6  ${isOpen ? "active" : ""}`} />
        ) : (
          <div className="rounded-full bg-herobg p-2">
            <IoIosClose className="w-7 h-7  text-white " />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
