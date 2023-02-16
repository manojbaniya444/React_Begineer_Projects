import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, isSubmenuOpen, closeSubmenu } =
    useGlobalContext();

  const submenuOpen = (e) => {
    const text = e.target.textContent;
    const tempbtn = e.target.getBoundingClientRect();
    const center = (tempbtn.left + tempbtn.right) / 2;
    const bottom = tempbtn.bottom - 3;
    openSubmenu(text, { center, bottom });
  };

  const navbarMouseover = (e) => {
    if (!e.target.classList.contains("list")) {
      closeSubmenu();
    }
  };
  return (
    <div className="navbar-container" onMouseOver={navbarMouseover}>
      <div className="navbar-header">
        <h3 className="logo">LOGO</h3>
        {/* This button will be hidden in larger screen */}
        <button className="sidebar-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="links-btn-container">
        <li>
          <button onMouseOver={submenuOpen} className="list">
            products
          </button>
        </li>
        <li>
          <button className="list" onMouseOver={submenuOpen}>
            developers
          </button>
        </li>
        <li>
          <button className="list" onMouseOver={submenuOpen}>
            company
          </button>
        </li>
      </ul>
      <div>
        <button className="sign-up-btn">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
