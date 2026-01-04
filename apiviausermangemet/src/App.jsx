import { useState, useContext } from "react";
import { UserProvider, UserDataContext } from "./context/UserProvider";
import UserList from "./components/users/UserList";
import RoleFilter from "./components/filters/RoleFilter";
import StatsSummary from "./components/stats/StatsSummary";

const Dashboard = () => {
  const [users] = useContext(UserDataContext);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");

  const filteredUsers = users.filter((u) => {
    const matchName = u.firstName.toLowerCase().includes(search.toLowerCase()) ||
                      u.lastName.toLowerCase().includes(search.toLowerCase());
    const matchRole = role === "all" ? true : u.role === role;
    return matchName && matchRole;
  });

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">User Management Dashboard</h1>

      <StatsSummary users={filteredUsers} />

      <div className="flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search user"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <RoleFilter value={role} onChange={setRole} />
      </div>

      <UserList users={filteredUsers} />
    </div>
  );
};

const App = () => (
  <UserProvider>
    <Dashboard />
  </UserProvider>
);

export default App;
