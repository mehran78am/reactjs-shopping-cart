import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Helmet } from "react-helmet";
const NotFound = () => {
  const { mood } = useContext(ShopContext);
  return (
    <div
      className={`pt-16 w-full h-screen text-center ${
        mood ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <Helmet>
        <title>Shop - Error 404</title>
        <meta name="description" content="this is not found page" />
      </Helmet>
      <h2 className="uppercase text-3xl mt-16 mb-4">error 404</h2>
      <p className="uppercase">page not found</p>
    </div>
  );
};

export default NotFound;
