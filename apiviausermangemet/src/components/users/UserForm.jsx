import { useState, useContext } from "react";
import { UserDataContext } from "../../context/UserProvider";

const UserForm = ({ user, onClose }) => {
  const [users, setUsers] = useContext(UserDataContext);
  const [form, setForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
  });

  const save = () => {
    setUsers(users.map(u => u.id === user.id ? { ...u, ...form } : u));
    onClose();
  };

  return (
    <div className="flex gap-2">
      <input
        value={form.firstName}
        onChange={e => setForm({ ...form, firstName: e.target.value })}
        className="border p-1 rounded"
      />
      <input
        value={form.lastName}
        onChange={e => setForm({ ...form, lastName: e.target.value })}
        className="border p-1 rounded"
      />
      <select
        value={form.role}
        onChange={e => setForm({ ...form, role: e.target.value })}
        className="border p-1 rounded"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={save} className="bg-green-600 text-white px-2 rounded">Save</button>
      <button onClick={onClose} className="bg-gray-400 text-white px-2 rounded">Cancel</button>
    </div>
  );
};

export default UserForm;
