import Banners from "../components/Banners";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="h-full">
      <Banners />
      <Categories />
      <Products
        title="Products For You"
        endpoint="/products/category/mens-shirts"
      />
      <Products
        title="Products For You"
        endpoint="/products/category/mens-shirts"
      />
    </div>
  );
};

export default Home;
