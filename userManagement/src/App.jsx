import { Routes, Route } from "react-router-dom";
import UsersManager from "./components/UsersManager";
import AddUserModal from "./components/AddUserModal";
import EditUserModel from "./components/EditUserModel";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersManager />} />
      <Route path="/add" element={<AddUserModal />} />
      <Route path="/edit/:index" element={<EditUserModel />} />
    </Routes>
  );
};

export default App;
