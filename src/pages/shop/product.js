import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link, useLocation } from "react-router-dom";

const Product = (props) => {
  const { price, id, productImage, productName } = props.data;
  const location = useLocation();

  const { cartItems, addToCart, removeFromCart, mood } =
    useContext(ShopContext);
  const isInCart = cartItems?.some((item) => item.id === id);
  const shopMood = mood ? "bg-gray-50  text-black" : "bg-gray-700 text-white";
  return (
    <div
      className={`text-center border border-gray-700 rounded-lg p-4 shadow-md transition-colors duration-500 ${shopMood}`}
    >
      <Link to={`/product/${id}`}>
        <img
          src={productImage}
          className={`w-full rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-105`}
        />
        <h3
          className={`capitalize my-1 font-bold ${
            mood ? "text-black" : "text-white"
          }`}
        >
          {productName}
        </h3>
        <p className={`capitalize my-2 ${mood ? "text-black" : "text-white"}`}>
          price : ${" "}
          <span className="text-green-500">
            {location.pathname.includes("cart")
              ? (
                  cartItems?.filter((row) => row.id === id)[0]?.count * price
                ).toFixed(2)
              : price.toFixed(2)}
          </span>
        </p>
      </Link>
      <button
        className="bg-blue-500 text-white font-bold py-1 px-2 rounded transition-transform transform hover:scale-105 active:scale-95 active:bg-blue-700"
        onClick={() => addToCart(id)}
      >
        <i className="fa fa-plus"></i>
      </button>
      <span className="mx-1">
        {cartItems?.filter((row) => row.id === id)[0]?.count}
      </span>
      {isInCart && (
        <button
          className="bg-red-500 text-white font-bold py-1 px-2 rounded transition-transform transform hover:scale-105 active:scale-95 active:bg-red-700"
          onClick={() => removeFromCart(id)}
        >
          <i className="fa fa-minus"></i>
        </button>
      )}
    </div>
  );
};
export default Product;
