import React from "react";

const Header = (props) => {
  return (
    <div>
      <header>{props.names}</header>
    </div>
  );
};

Header.defaultProps = {
  name: "Hello World",
};

export default Header;
