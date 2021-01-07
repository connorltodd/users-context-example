import React from "react";
import AddUserForm from "./AddUserForm";
import { UserContext } from "../contexts/UserContext";

export default function UsersList() {
  const { users, deleteUser } = React.useContext(UserContext);

  return (
    <div>
      <p>UsersList</p>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => deleteUser(user)}>delete user</button>
        </div>
      ))}

      <AddUserForm />
    </div>
  );
}
