import Headers from "./components/Headers";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      bio: "Lorem Ipsum is amet",
      age: 25,
      isHappy: true,
      email: "",
      avatar: "",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Doesing",
      bio: "Lorem Ipsum",
      age: 24,
      isHappy: false,
      email: "",
      avatar: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(baseUrl) // убрал кастомный заголовок
      .then((res) => {
        const apiUsers = (res.data.data || []).map((u) => ({
          id: u.id,
          first_name: u.first_name || u.firstname || "",
          last_name: u.last_name || u.lastname || "",
          bio: "",
          age: 0,
          isHappy: false,
          email: u.email || "",
          avatar: u.avatar || "",
        }));
        setUsers(apiUsers);
      })
      .catch((error) => {
        console.error(
          "Fetch users error:",
          error.response ? error.response.data : error.message
        );
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
    <div className="app-root">
      <div className="animated-bg" aria-hidden="true">
        <span className="p p1" />
        <span className="p p2" />
        <span className="p p3" />
        <span className="p p4" />
        <span className="p p5" />
      </div>

      <Headers names="User Сontact" />
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
