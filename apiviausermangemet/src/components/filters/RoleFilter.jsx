const RoleFilter = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="all">All Roles</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
  );
};

export default RoleFilter;
