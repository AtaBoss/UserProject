import React, { useState } from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddUser from "./AddUser";

const User = (props) => {
  const user = props.user;
  const [editForm, setEditForm] = useState({
    editForm: false,
  });
  return (
    <div className="user">
      <IoCloseCircleSharp
        onClick={() => props.onDelete(user.id)}
        className="delete-icon"
      />
      <IoHammerSharp
        onClick={() => {
          setEditForm({ editForm: !editForm.editForm });
        }}
        className="edit-icon"
      />
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <img src={user.avatar} alt="avatar" />
      <p>{user.email}</p>
      <p>{user.age}</p>
      <p>{user.isHappy ? "Happy :)" : "Not Happy"}</p>

      {editForm.editForm && <AddUser user={user} onAdd={props.onEdit} />}
    </div>
  );
};

export default User;
