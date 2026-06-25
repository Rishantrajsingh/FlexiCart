import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="fixed w-full h-20 top-0 left-0 px-3 z-10 bg-white">
      {!isSearchOpen ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Menu size={30} />
            <img src={logo} className="h-20" />
          </div>
          <div className="flex items-center gap-3">
            <div
              className="border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center active:scale-90"
              onClick={() => setIsSearchOpen(true)}
            >
              <HiSearch size={30} />
            </div>
            <div className="border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center active:scale-90">
              <FaShoppingCart size={30} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 h-full">
          <div className="flex items-center border rounded px-2 w-full border-gray-400">
            <Search />
            <input
              type="text"
              placeholder="Search products..."
              className="px-3 py-2 w-full outline-none"
            />
          </div>

          <X
            className="cursor-pointer"
            onClick={() => setIsSearchOpen(() => false)}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
