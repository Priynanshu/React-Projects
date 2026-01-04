import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartUI = ({ isOpen, onClose }) => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl p-5 z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-bold">🛒 Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="mt-4 space-y-4 overflow-y-auto h-[70%]">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Cart is empty
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm border-b pb-2"
              >
                <span className="line-clamp-1">{item.title}</span>
                <span className="font-semibold">₹ {item.price}</span>
              </div>
            ))
          )}
        </div>

        {/* Checkout */}
        <button
        onClick={onClose}
          className="mt-6 w-full bg-black text-white py-2 rounded-lg
          hover:bg-gray-800 transition"
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartUI;
