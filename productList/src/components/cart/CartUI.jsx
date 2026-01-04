import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartUI = ({ isOpen, onClose }) => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p className="text-center mt-10">Cart is empty</p>;
  }

  return (
    
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl p-4 transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h2 className="text-lg font-bold mb-4">Cart</h2>

      <div className="space-y-3">
        {cart.map((item) => {
          return (
            <div key={item.id} className="flex justify-between text-sm">
              <span>{item.title}</span>
              <span>₹ {item.price}</span>
            </div>
          );
        })}
      </div>

      <button onClick={onClose} className="mt-6 block w-full bg-black text-white py-2 rounded text-center ">
        Checkout
      </button>
    </div>
  );
};

export default CartUI;
