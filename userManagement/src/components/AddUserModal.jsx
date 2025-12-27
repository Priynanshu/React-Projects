import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

const AddUserModal = () => {
  const [user, setUser] = useContext(DataContext)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: "",
    email: "",
    role: "Admin",
    status: "Active",
  })

  const submit = () => {
    if(form.username.trim() === "" || form.email.trim() === "") return;
    setUser([...user, form])
    navigate("/")
  }
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">

        <h2 className="text-2xl font-bold mb-4 text-center">
          ➕ Add New User
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            onChange={(e)=> {
              setForm({...form, username: e.target.value})
            }}
            placeholder="Enter name"
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            onChange={(e)=> {
              setForm({...form, email: e.target.value})
            }}
            placeholder="Enter email"
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Role</label>
          <select 
          onChange={(e)=> {
              setForm({...form, role: e.target.value})
            }}
          className="w-full border px-3 py-2 rounded-lg">
            <option>User</option>
            <option>Admin</option>
          </select>
        </div>

        {/* Status */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Status</label>
          <select 
          onChange={(e)=> {
              setForm({...form, status: e.target.value})
            }}
          className="w-full border px-3 py-2 rounded-lg">
            <option>Active</option>
            <option>Pending</option>
            <option>Blocked</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Link to="/" className="px-4 py-2 border rounded-lg">
            Cancel
          </Link>
          <button 
          onClick={submit}
           className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddUserModal;
