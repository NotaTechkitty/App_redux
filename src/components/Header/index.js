import React from "react";
import "./header.css";
function Header({ title }) {
  return (
    <div className="header-container">
      <h3>{title}</h3>
    </div>
  );
}

export default Header;
