import clsx from "clsx";
import React from "react";
import "./aside-menu.css";
function AsideMenu({ menuButton, isOpen }) {
  return (
    <div className={clsx("aside-container", isOpen ? "active" : "")}>
      {menuButton}
    </div>
  );
}

export default AsideMenu;
