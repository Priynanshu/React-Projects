const CategoryFilter = ({ value, onChange }) => {
  return (
    <select
      className="border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="all">All Categories</option>
      <option value="Work">Work</option>
      <option value="Study">Study</option>
      <option value="Personal">Personal</option>
    </select>
  );
};

export default CategoryFilter;
