import Headers from "./components/Headers";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import React, { useState } from "react";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      bio: "Lorem Ipsum is amet",
      age: 25,
      isHappy: true,
    },
    {
      id: 2,
      firstname: "Jane",
      lastname: "Doesing",
      bio: "Lorem Ipsum",
      age: 24,
      isHappy: false,
    },
  ]);

  React.useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  const addUser = (user) => {
    const id = users.length + 1;
    setUsers([...users, { id, ...user }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
    setUsers(updatedUsers);
  };

  return (
    <div>
      <Headers names="JoJo" />
      <main>
        <Users users={users} onEdit={editUser} onDelete={deleteUser} />
      </main>
      <aside>
        <AddUser onAdd={addUser} />
      </aside>
    </div>
  );
};

export default App;
