import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Nav from "./components/nav";
import { ShopContextProvider } from "./context/ShopContext";
import Welcome from "./components/welcome";
import ProductDetails from "./pages/details/ProductDetails";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import NotFound from "./pages/not-found/NotFound";
import Checkout from "./pages/checkout/Checkout";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={"App overflow-x-hidden "}>
      {isLoading ? (
        <Loading />
      ) : (
        <ShopContextProvider>
          <Router>
            <Nav />
            <Welcome />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      )}
    </div>
  );
}

export default App;
