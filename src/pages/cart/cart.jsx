import { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/ShopContext";
import Product from "../shop/product";
import { Helmet } from "react-helmet";
import emptyCart from "../../assets/empty-cart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, resetCart, itemCount, mood, totalPrice } =
    useContext(ShopContext);

  return (
    <div
      className={`transition-colors duration-500 h-screen pb-8 pt-20 overflow-y-scroll overflow-x-hidden ${
        mood ? "bg-white" : "bg-gray-900"
      }`}
    >
      <Helmet>
        <title>Shop - Your Cart</title>
        <meta name="description" content="this is cart page" />
      </Helmet>
      <div className="capitalize text-center mb-8">
        <h1
          className={`transition-colors duration-500 text-xl font-bold ${
            !mood ? "text-white" : "text-black"
          }`}
        >
          your cart
        </h1>
        <span
          className={`transition-colors duration-500 ${
            mood ? "text-gray-800" : "text-gray-300"
          }`}
        >
          ({itemCount} items)
        </span>
      </div>
      <div
        className=" grid grid-cols-1 gap-x-4 gap-y-8 px-10
        2sm:grid-cols-2 2sm:px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 container mx-auto"
      >
        {PRODUCTS.map((p) => {
          if (cartItems?.some((i) => i.id === p.id && i.count > 0))
            return <Product data={p} key={p.id} />;
        })}
      </div>
      {itemCount > 0 ? (
        <div className="text-center">
          <button
            className="w-3/4 md:w-1/3 mx-4 capitalize bg-red-500 text-white font-bold py-4 px-8 mt-8 mb-4 rounded transition-transform transform hover:scale-105 active:scale-95 active:bg-red-700"
            onClick={resetCart}
          >
            reset your cart
          </button>
          <button className="w-3/4 md:w-1/3 uppercase bg-blue-500 text-white font-bold py-4 px-8 mt-8 mb-4 rounded transition-color  hover:bg-blue-600  active:bg-blue-700">
            <Link to="/checkout">Checkout $ {totalPrice().toFixed(2)}</Link>
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-4">
          <img src={emptyCart} alt="" />
        </div>
      )}
    </div>
  );
};

export default Cart;
