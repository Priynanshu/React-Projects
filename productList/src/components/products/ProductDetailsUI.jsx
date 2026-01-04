import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";

const ProductDetailsUI = () => {
  const { productData } = useContext(ProductContext);
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);
  const { id } = useParams();

  const product = productData.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <p className="text-center">Loading product...</p>;
  }

  const inCart = isInCart(product.id);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Image */}
      <div className="border rounded-xl p-6 flex justify-center bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="h-96 object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Details */}
      <div>
        <h2 className="text-3xl font-bold">{product.title}</h2>

        <p className="text-gray-500 mt-2 capitalize">
          {product.category}
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          {product.description}
        </p>

        <p className="text-3xl font-bold mt-6">
          ₹ {product.price}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-8">
          <Link
            to="/"
            className="border px-6 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            ← Back
          </Link>

          {inCart ? (
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 text-white px-6 py-2 rounded-lg
              hover:bg-red-600 transition"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white px-6 py-2 rounded-lg
              hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsUI;
