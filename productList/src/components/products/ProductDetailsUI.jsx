import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";

const ProductDetailsUI = () => {
  const {productData} = useContext(ProductContext)
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);
  const {id} = useParams()

  const product = productData.find(
    (item) => item.id === Number(id)
  );
  const inCart = isInCart(product.id);

  if (!product) {
    return <p className="text-center">Loading product...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="border rounded p-6 flex justify-center">
        <img
          src={product.image}
          className="h-80 object-contain"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          {product.title}
        </h2>

        <p className="text-gray-500 mt-1">
          {product.category}
        </p>

        <p className="mt-4 text-gray-700">
         {product.description}
        </p>

        <p className="text-3xl font-bold mt-4">
          ₹ {product.price}
        </p>

        <div className="flex item-center gap-3">
          <Link to="/" className="mt-6 bg-black text-white px-6 py-2 rounded">
         Back
        </Link>

          {inCart ? (
          <button
            onClick={() => removeFromCart(product.id)}
            className="bg-red-500 text-white mt-6 bg-black text-white px-6 py-2 rounded cursor-pointer"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white mt-6 bg-black text-white px-6 py-2 rounded cursor-pointer"
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
