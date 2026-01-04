const CategoryFilter = ({value, onChange}) => {
  return (
    <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
     className="border p-2 rounded w-48">
      <option value="all">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="men's clothing">Fashion</option>
      <option value="jewelery">Jewellery</option>
    </select>
  );
};

export default CategoryFilter;
