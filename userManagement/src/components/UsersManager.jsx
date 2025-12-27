import { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";

const UsersManager = () => {
  const [user, setUser] = useContext(DataContext)
  const [search, setSearch] = useState('')
  const [role, setRole] = useState("all");

  const deleteUser = (index) => {
    const update = user.filter((elem, i) => i !== index);
    setUser(update)
  }

  const filteredUsers = user.filter((u) => {
    const matchSearch =
      u.username.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());

    const matchRole =
      role === "all" ? true : u.role === role;

    return matchSearch && matchRole;
  });



  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">👥 Users Management</h1>
          <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            ➕ Add User
          </Link>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            placeholder="Search by name or email..."
            className="flex-1 border px-4 py-2 rounded-lg"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border px-4 py-2 rounded-lg">
            <option value="all">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3">{user.username}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded ${user.status === "Active" ? "text-green-300 bg-green-600" : user.status === "Pending" ? "text-yellow-300 bg-yellow-600" : "text-red-300 bg-red-600"}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <Link to={`/edit/${index}`} className="text-blue-600">
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(index)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredUsers.length === 0 && (
            <p className="text-center mt-4 text-gray-500">
              No users found
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default UsersManager;
