import React, { useEffect, useState } from "react";

const Button = (props) => {
  const [click, setClick] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${click} times`;
  });

  return (
    <button onClick={() => setClick(click + 1)}>
      {props.text}
      {click}
    </button>
  );
};

Button.defaultProps = {
  text: "Submit",
};

export default Button;
