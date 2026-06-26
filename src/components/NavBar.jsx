import { Menu, Search, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="fixed flex items-center justify-between w-full h-20 top-0 left-0 px-3 md:px-7 z-10 bg-white">
      {/* menu and logo */}
      <div
        className={`${isSearchOpen ? "hidden md:flex" : "flex"} items-center w-fit`}
      >
        <Menu size={30} className="md:w-30 active:scale-90" />
        <img src={logo} className="h-20" />
      </div>

      {/* search  */}

      {/* mobile  */}

      <div
        className={`${isSearchOpen ? "flex" : "hidden"} md:hidden items-center gap-2 h-full w-full`}
      >
        <div className="flex items-center border rounded px-2 w-full border-gray-400">
          <Search />
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-2 w-full outline-none"
          />
        </div>

        <X onClick={() => setIsSearchOpen(() => false)} />
      </div>

      {/* tablet  */}

      <div className="hidden md:flex items-center border rounded px-2 md:mr-3 w-full h-fit border-gray-400">
        <Search />
        <input
          type="text"
          placeholder="Search products..."
          className="px-3 py-2 w-full outline-none"
        />
      </div>

      {/* search and cart  */}

      <div className={`${isSearchOpen ? "hidden" : "flex"} items-center gap-3`}>
        <div
          className="md:hidden border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center active:scale-90"
          onClick={() => setIsSearchOpen(true)}
        >
          <HiSearch size={30} />
        </div>
        <div className="border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center active:scale-90">
          <FaShoppingCart size={30} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
