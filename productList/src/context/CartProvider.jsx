import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // 1️⃣ LocalStorage se initial state lo
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 2️⃣ Cart update hone par localStorage me save karo
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        // quantity badhao
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // naya product
        return [
          ...prev,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
