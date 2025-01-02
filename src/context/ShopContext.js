import { createContext, useEffect, useState } from "react";
export const ShopContext = createContext(null);
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();
  const [mood, setMood] = useState(() => {
    const saveMood = localStorage.getItem("Mood");
    return saveMood === "true";
  });
  useEffect(() => {
    const data = localStorage.getItem("assets");
    setCartItems(!!JSON.parse(data) ? JSON.parse(data) : []);
  }, []);
  useEffect(() => {
    if (cartItems !== undefined)
      localStorage.setItem("assets", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem("Mood", mood);
  }, [mood]);
  const addToCart = (itemId) => {
    if (!cartItems?.find((item) => itemId === item.id))
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    else
      setCartItems(
        cartItems.map((item) => {
          if (itemId === item.id) return { ...item, count: item.count + 1 };
          else return item;
        })
      );
  };
  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((i) => {
        if (i.id === itemId)
          return { ...i, count: i.count === 0 ? 0 : i.count - 1 };
        else return i;
      })
    );
  };
  const resetCart = () => {
    setCartItems([]);
    localStorage.removeItem("assets");
  };
  const handleChangeMood = () => {
    setMood(!mood);
  };
  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current.count;
  }, 0);
  const contextValue = {
    mood,
    cartItems,
    addToCart,
    removeFromCart,
    resetCart,
    handleChangeMood,
    itemCount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
