import React from "react";
import User from "./User"; // Импортируем компонент User

const Users = (props) => {
  if (props.users.length > 0) {
    return (
      <div>
        {props.users.map((user) => (
          <User
            onEdit={props.onEdit}
            onDelete={props.onDelete}
            key={user.id}
            user={user}
          />
        ))}
      </div>
    );
  } else {
    return <div className="user">No users found</div>;
  }
};

export default Users;
