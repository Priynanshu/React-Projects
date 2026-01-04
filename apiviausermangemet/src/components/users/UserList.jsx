import UserCard from "./UserCard";

const UserList = ({ users }) => {
  if(users.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No users found</p>
  }

  return (
    <div className="space-y-3 mt-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
