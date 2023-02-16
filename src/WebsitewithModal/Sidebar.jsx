import React from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${isSidebarOpen ? "show-sidebar sidebar" : "hide-sidebar"}`}
    >
      <button className="sidebar-close-btn" onClick={closeSidebar}>
        X
      </button>
      <div className="item-top-container">
        {sublinks.map((item, index) => {
          const { page, links } = item;
          return (
            <div key={index} className="item-container">
              <h3>{page}</h3>
              <div className="item-sidebar-icon">
                {/* Here we need to iterate the links further  */}
                {links.map((item2,index) => {
                  const { url, icon, label } = item2;
                  return (
                    <a href={url} key={index}>
                      {icon} {label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
