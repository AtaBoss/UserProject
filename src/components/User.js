// ...existing code...
import React, { useState } from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddUser from "./AddUser";
import "../css/fotos_idit.css";
// ...existing code...

const User = (props) => {
  const user = props.user;
  const [editForm, setEditForm] = useState({
    editForm: false,
  });

  const initials =
    (user.first_name ? user.first_name[0] : "") +
    (user.last_name ? user.last_name[0] : "");

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
      <h1 className="glow-text">
        {user.first_name} {user.last_name}
      </h1>

      {/* render img only if avatar is non-empty; otherwise render placeholder */}
      {user.avatar ? (
        <img src={user.avatar} alt="avatar" className="avatar" />
      ) : (
        <div className="avatar avatar-placeholder" aria-hidden="true">
          {initials || "U"}
        </div>
      )}

      <p className="glow-text">{user.email}</p>
      <p className="glow-text">{user.age}</p>
      <p className="glow-text">{user.isHappy ? "Happy :)" : "Not Happy"}</p>

      {editForm.editForm && <AddUser user={user} onAdd={props.onEdit} />}
    </div>
  );
};

export default User;
// ...existing code...
