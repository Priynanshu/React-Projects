const StatusFilter = ({ value, onChange }) => {
  return (
    <select
      className="border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="all">All Status</option>
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default StatusFilter;
