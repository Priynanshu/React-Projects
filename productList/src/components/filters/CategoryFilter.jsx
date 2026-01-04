const CategoryFilter = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        border border-gray-300 p-2 rounded-lg w-48
        bg-white text-sm
        hover:border-black
        focus:outline-none focus:ring-2 focus:ring-black
        transition-all duration-200
      "
    >
      <option value="all">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="men's clothing">Fashion</option>
      <option value="jewelery">Jewellery</option>
    </select>
  );
};

export default CategoryFilter;
