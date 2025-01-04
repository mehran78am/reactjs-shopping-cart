import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Checkout = () => {
  const { mood, resetCart } = useContext(ShopContext);
  return (
    <div
      className={`transition-colors duration-500 h-screen pb-8 pt-20 overflow-y-scroll overflow-x-hidden  ${
        mood ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <Helmet>
        <title>Shop - Checkout</title>
        <meta name="description" content="this is checkout page" />
      </Helmet>
      <div className="w-11/12 md:w-1/2 mx-auto text-left mt-5">
        <h3 className="uppercase text-2xl">Success</h3>
        <p className="my-5">
          Congratulations, on your purchase. The order has been received and is
          being processed.
        </p>
        <p className="mb-10">
          This is for demo purposes only. You have not been charged, the order
          is not being processed.
        </p>
        <Link
          to="/"
          onClick={resetCart}
          className="uppercase bg-transparent border-gray-400 border-2 rounded font-bold py-3 px-6 transition-color hover:bg-gray-400 active:bg-gray-700"
        >
          continue shopping
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
