import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  if (!product) return null;

  const inCart = isInCart(product.id);

  return (
    <div className="border rounded-lg p-4 flex flex-col hover:shadow-lg transition">
      <img
        src={product.image}
        alt="product"
        className="h-40 object-contain mb-4"
      />

      <h3 className="text-sm font-semibold line-clamp-2">
        {product.title}
      </h3>

      <p className="text-gray-500 text-sm mt-1">{product.category}</p>

      <p className="font-bold mt-2">₹ {product.price}</p>

      <div className="mt-auto flex gap-2 pt-4">
        <Link
          to={`/product/${product.id}`}
          className="border px-3 py-1 rounded text-sm cursor-pointer"
        >
          View
        </Link>

        {inCart ? (
          <button
            onClick={() => removeFromCart(product.id)}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm cursor-pointer"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-3 py-1 rounded text-sm cursor-pointer"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
