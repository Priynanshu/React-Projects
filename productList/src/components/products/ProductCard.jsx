import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  if (!product) return null;

  const inCart = isInCart(product.id);

  return (
    <div
      className="
        border rounded-xl p-4 flex flex-col bg-white
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt="product"
          className="
            h-40 w-full object-contain
            transition-transform duration-300
            hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <h3 className="text-sm font-semibold line-clamp-2 mt-3">
        {product.title}
      </h3>

      <p className="text-gray-500 text-xs mt-1">{product.category}</p>

      <p className="font-bold mt-2 text-lg">₹ {product.price}</p>

      {/* Actions */}
      <div className="mt-auto flex gap-2 pt-4">
        <Link
          to={`/product/${product.id}`}
          className="
            flex-1 text-center
            border border-gray-300
            px-3 py-1.5 rounded-lg text-sm
            hover:bg-gray-100
            transition
          "
        >
          View
        </Link>

        {inCart ? (
          <button
            onClick={() => removeFromCart(product.id)}
            className="
              flex-1
              bg-red-500 text-white
              px-3 py-1.5 rounded-lg text-sm
              hover:bg-red-600
              transition
            "
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="
              flex-1
              bg-black text-white
              px-3 py-1.5 rounded-lg text-sm
              hover:bg-gray-800
              transition
            "
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
