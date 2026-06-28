import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";

const Products = ({ title, endpoint }) => {
  const gradients = [
    "bg-gradient-to-br from-[#fff2df] via-[#ffe7c2] to-[#ffc97a]", // Cream Orange
    "bg-gradient-to-br from-[#fff7e6] via-[#ffe8bf] to-[#ffd08a]", // Soft Peach
    "bg-gradient-to-br from-[#fff5e8] via-[#ffe2c4] to-[#ffc89b]", // Light Apricot
    "bg-gradient-to-br from-[#fff8ef] via-[#ffeccf] to-[#ffd9a8]", // Warm Beige
    "bg-gradient-to-br from-[#fff3e4] via-[#ffe4bf] to-[#ffcf94]", // Sand Gold
    "bg-gradient-to-br from-[#fff6ea] via-[#ffe7c8] to-[#ffd6a0]", // Vanilla
    "bg-gradient-to-br from-[#fff4e7] via-[#ffe5c6] to-[#ffcf98]", // Soft Amber
    "bg-gradient-to-br from-[#fff9f2] via-[#ffeedb] to-[#ffdcb5]", // Ivory
  ];
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts(endpoint);
      setProductsData(data.products);
      console.log(data.products);
    };

    loadProducts();
  }, [endpoint]);

  return (
    <div className="w-full mt-5">
      <h1 className="text-xl font-semibold ml-3">{title}</h1>

      <div className="flex overflow-x-auto scrollbar-hide gap-3 w-full py-4  px-3">
        {productsData.map((items) => {
          return (
            <div
              key={items.id}
              className="min-w-50 h-70 rounded-lg border border-gray-400 p-2"
            >
              <img
                src={items.thumbnail}
                className={`${gradients[items.id % gradients.length]} rounded-xl p-4 w-100 h-50`}
              />
              <p className="truncate">{items.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
