import React from "react";
const logo = require("../assets/logo192.png");
const Header = () => {
  return (
    <header className="mb-2 flex gap-3 items-center">
      <img src={logo} style={{ width: "30px" }} alt="logo" />
      <h2 className="text-xl text-center">Messages</h2>
    </header>
  );
};

export default Header;
