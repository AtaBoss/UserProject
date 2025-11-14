import React, { useState, useRef } from "react";

const AddUser = (props) => {
  let userAdd = {};
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    bio: "",
    age: 1,
    isHappy: false,
  });
  const myForm = useRef(null);
  return (
    <div>
      <form ref={myForm}>
        <input
          placeholder="Name "
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              first_name: e.target.value,
            }))
          }
        />
        <input
          placeholder="Surname "
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              last_name: e.target.value,
            }))
          }
        />
        <button className="add-photo" type="button">
          Add Photo
        </button>
        <input
          placeholder="Email "
          onChange={(e) =>
            setState((prevState) => ({ ...prevState, age: e.target.value }))
          }
        />
        <label htmlFor="isHappy">IsHappy?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              isHappy: e.target.checked,
            }))
          }
        />
        <button
          type="button"
          onClick={() => {
            myForm.current.reset();
            userAdd = {
              first_name: state.first_name,
              last_name: state.last_name,
              bio: state.bio,
              age: state.age,
              isHappy: state.isHappy,
            };
            if (props.user) userAdd.id = props.user.id;
            props.onAdd(userAdd);
          }}
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddUser;
