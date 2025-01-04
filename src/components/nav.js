import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
const Nav = () => {
  const { mood, handleChangeMood, itemCount } = useContext(ShopContext);
  const hoverNav = mood ? "hover:text-gray-600" : "hover:text-gray-300";
  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 p-3 shadow-md transition-colors duration-500 ${
        mood ? "bg-slate-100 text-black" : "bg-slate-950 text-white"
      }`}
    >
      <div className="flex items-center justify-between flex-row w-full lg:px-6">
        <Link
          to="https://github.com/mehran78am"
          className={`sm:text-2xl text-xl  ${hoverNav}`}
        >
          <i className="fa fa-github"></i>
        </Link>
        <Link to="/" className={`sm:text-2xl text-xl ${hoverNav}`}>
          Shop
        </Link>
        <ul className="flex items-center justify-between flex-row gap-x-4">
          <li className="relative">
            <Link to="/cart" className={`sm:text-2xl text-xl ${hoverNav}`}>
              <i className="fa fa-shopping-cart"></i>
              {itemCount > 0 && (
                <span className="absolute text-sm -top-2 -right-5 bg-red-600 text-white rounded size-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </li>
          <li>
            <button
              className={`sm:text-2xl text-xl ml-2 sm:mx-2 size-4 ${hoverNav}`}
              onClick={handleChangeMood}
            >
              <i className={mood ? "fa fa-moon-o " : " fa fa-sun-o"}></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
