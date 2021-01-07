import React from "react";
import { UserContext } from "../contexts/UserContext";

export default function AddUserForm() {
  const { addUser } = React.useContext(UserContext);
  const [state, setState] = React.useState({
    email: "",
    name: "",
    password: "",
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addUser(state);
      }}
    >
      <input
        name="email"
        value={state.name}
        type="text"
        placeholder="name"
        onChange={(event) => setState({ ...state, name: event.target.value })}
      />
      <button type="submit">Save User</button>
    </form>
  );
}
