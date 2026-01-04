import { useContext, useState } from "react";
import { UserDataContext } from "../../context/UserProvider";
import UserForm from "./UserForm";

const UserCard = ({ user }) => {
  const [users, setUsers] = useContext(UserDataContext);
  const [editing, setEditing] = useState(false);

  const deleteUser = () => {
    // Optimistic update
    setUsers(users.filter(u => u.id !== user.id));
  };

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      {editing ? (
        <UserForm user={user} onClose={() => setEditing(false)} />
      ) : (
        <>
          <div>
            <h3 className="font-semibold">{user.firstName} {user.lastName}</h3>
            <p className="text-gray-500 text-sm">{user.role}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setEditing(true)} className="text-green-600">Edit</button>
            <button onClick={deleteUser} className="text-red-600">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCard;
