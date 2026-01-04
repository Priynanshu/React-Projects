import React from "react";

const StatsSummary = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="font-semibold">Total Users</h3>
        <p>{users.length}</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="font-semibold">Admins</h3>
        <p>{users.filter(u => u.role === "admin").length}</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="font-semibold">Users</h3>
        <p>{users.filter(u => u.role === "user").length}</p>
      </div>
    </div>
  );
};

export default StatsSummary;
