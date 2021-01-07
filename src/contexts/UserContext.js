import React, { useContext, useState, createContext } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider(props) {
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => setUsers(response));
  }, []);

  const deleteUser = (userToDelete) => {
    // axios
    //   .delete(`https://jsonplaceholder.typicode.com/users/${userToDelete.id}`)
    //   .then((response) => {
    //     let newUsersArray = users.filter((user) => user.id !== userToDelete.id);
    //     setUsers(newUsersArray);
    //   })
    //   .catch((err) => alert(error));
  };

  const addUser = (newUser) => {
    // The below example is without api connection
    console.log(newUser);
    let newUsersArray = [...users, newUser];
    setUsers(newUsersArray);

    // the below example is with api connection
    // axios
    //   .post(`https://jsonplaceholder.typicode.com/users`, {
    //     newUser,
    //   })
    //   .then((response) => {
    //     let newUsersArray = [...users, response.data];
    //     setUsers(newUsersArray);
    //   })
    //   .catch((err) => alert(error));
  };

  const editUSer = (userToEdit) => {
    // axios
    //   .put(`https://jsonplaceholder.typicode.com/users/${userToEdit.id}`, {
    //     userToEdit,
    //   })
    //   .then((response) => {
    //     let newUsersArray = users.map((user) =>
    //       user.id === response.data.id ? response.data : user
    //     );
    //     setUsers(newUsersArray);
    //   })
    //   .catch((err) => alert(error));
  };

  return (
    <UserContext.Provider value={{ users, deleteUser, addUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
