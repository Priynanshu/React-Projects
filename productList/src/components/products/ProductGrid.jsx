import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [] }) => {
  if (!products.length) {
    return <p className="text-center">Loading products...</p>;
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((elem) => {
        return <ProductCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default ProductGrid;
