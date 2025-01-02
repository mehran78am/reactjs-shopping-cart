import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Helmet } from "react-helmet";
const ProductDetails = () => {
  const { addToCart, mood } = useContext(ShopContext);
  const { id } = useParams();
  const textMood = !mood ? "text-white" : "text-black";
  return (
    <div
      className={`pt-16 w-full py-8 h-screen transition-colors duration-500 overflow-y-scroll ${
        mood ? "bg-white" : "bg-gray-900"
      }`}
    >
      {PRODUCTS.map((item) => {
        if (item.id == id)
          return (
            <div className=" flex flex-col xl:flex-row w-2/3 mx-auto p-1 pt-16">
              <Helmet>
                <title>Shop - {item.productName}</title>
                <meta
                  name="description"
                  content="this is detail product page"
                />
              </Helmet>
              <img
                src={item.productImage}
                alt=""
                className="xl:mr-4 xl:w-full rounded w-1/2"
              />
              <div className="w-full relative">
                <h2 className="capitalize text-2xl font-extrabold text-green-500">
                  {item.productName}
                </h2>
                <p className="text-gray-500 text-base capitalize">
                  price : $ {item.price}
                </p>
                <p
                  className={`text-justify mt-4 leading-6 transition-colors duration-500  ${textMood}`}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <button
                  className={`p-2 block bg-transparent w-3/5 mt-10 mx-auto border border-gray-500 rounded transition-transform transform hover:scale-105 active:scale-95 capitalize  ${textMood}`}
                  onClick={() => addToCart(item.id)}
                >
                  add to cart
                </button>
                <Link
                  to={"/"}
                  className={`absolute top-0 text-2xl right-0 bg-transparent rounded transition-transform transform hover:scale-105 active:scale-95  ${textMood}`}
                >
                  <i className="fa fa-arrow-left "></i>
                </Link>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default ProductDetails;
