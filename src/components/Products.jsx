import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productsApi";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAllProducts();
      console.log(res.data.products);
      setProductsData(res.data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full h-screen mt-5 px-3">
      <h1 className="text-xl font-semibold">Products For You</h1>

      <div className="grid grid-cols-2 justify-items-center gap-3 w-full mt-5">
        {productsData.map((prod) => {
          return (
            <div
              key={prod.id}
              className="w-50 h-70 rounded-lg border border-[#ffc97a] p-2"
            >
              <img
                src={prod.thumbnail}
                className="bg-gradient-to-br from-[#fff2df] via-[#ffe7c2] to-[#ffc97a] rounded-lg"
              />
              <p className="truncate">{prod.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
