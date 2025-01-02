import { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import Product from "./product";
import { ShopContext } from "../../context/ShopContext";
import { Helmet } from "react-helmet";
const Shop = () => {
  const { mood } = useContext(ShopContext);

  return (
    <div
      className={`pt-16 pb-5 scroll-smooth px-10 overflow-y-scroll transition-colors duration-500
        ${mood ? "bg-white" : "bg-gray-900"}`}
    >
      <Helmet>
        <title>Shop - Home</title>
        <meta name="description" content="this is home page" />
      </Helmet>
      <div
        className="grid grid-cols-1 gap-x-4 gap-y-8 
        2sm:grid-cols-2 2sm:px-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
         xl:grid-cols-6 container mx-auto"
      >
        {PRODUCTS.map((productData) => {
          return <Product data={productData} key={productData.id} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
