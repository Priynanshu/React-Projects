import { createContext, useState, useEffect } from "react";
import { fetchUsers } from "../api/userApi";

export const UserDataContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <UserDataContext.Provider value={[users, setUsers]}>
      {children}
    </UserDataContext.Provider>
  );
};
