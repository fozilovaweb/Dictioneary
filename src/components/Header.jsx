import ThemeToggle from "./ThemeToggle";
import FontSelector from "./FontSelector";
import { RiBook2Line } from "react-icons/ri";
const Header = () => {
  return (
    <header className="container mx-auto  flex justify-between items-center  py-6 px-6 ">
      <div className="flex items-center gap-3 text-2xl font-bold">
        <RiBook2Line className="text-4xl text-[#757575]  dark:text-white" />
      </div>

      <div className="flex items-center gap-6">
        <div className="border-r-2 pr-6 border-[#e9e9e9]">
          <FontSelector />
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
