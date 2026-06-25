import { FaBookOpen, FaCarAlt, FaMobile, FaTshirt } from "react-icons/fa";
import Banners from "../components/Banners";
import {
  MdLocalGroceryStore,
  MdOutlinePets,
  MdOutlineSportsVolleyball,
  MdSoupKitchen,
} from "react-icons/md";
import { GiComb } from "react-icons/gi";
import { SiYoutubegaming } from "react-icons/si";
import { TbHorseToy } from "react-icons/tb";

const Categories = () => {
  const categories = [
    { id: 1, icon: FaMobile, name: "Electronics" },
    { id: 2, icon: FaTshirt, name: "Fashion" },
    { id: 3, icon: MdSoupKitchen, name: "Home" },
    { id: 4, icon: GiComb, name: "Beauty" },
    { id: 5, icon: MdLocalGroceryStore, name: "Grocery" },
    { id: 6, icon: MdOutlineSportsVolleyball, name: "Sports" },
    { id: 7, icon: FaBookOpen, name: "Books" },
    { id: 8, icon: TbHorseToy, name: "Toys" },
    { id: 9, icon: FaCarAlt, name: "Automotive" },
    { id: 10, icon: MdOutlinePets, name: "Pets" },
    { id: 11, icon: SiYoutubegaming, name: "Gaming" },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold ml-3">Category</h1>
      <div className="flex overflow-x-auto scrollbar-hide gap-6 mt-4 px-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div key={category.id} className="flex flex-col items-center">
              <div className="bg-[#fff2df] rounded-full w-fit p-3">
                <Icon size={50} color="#656941" />
              </div>
              <p className="text-sm mt-2">{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
