import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import CartUI from "../cart/CartUI";

const Navbar = () => {
  const { cart } = useContext(CartContext);

   const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  return (
    <>
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">FakeStore</h1>

      <div className="flex gap-4 items-center">
        <button onClick={() => setIsCartOpen(true)} className="border px-3 py-1 rounded cursor-pointer">
          Cart ({totalItems})
        </button>
      </div>
    </nav>

    <CartUI isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
