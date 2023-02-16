import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";
const Submenu = () => {
  const [columns, setColumns] = useState("col-2");
  const {
    isSubmenuOpen,
    location,
    pages: { page, links },
  } = useGlobalContext();
  const container = useRef(null);





  useEffect(() => {
    setColumns("col-2");
    const { center, bottom } = location;
    const submenu = container.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, page, links]);





  return (
    <div
      className={`${isSubmenuOpen ? "submenu show-submenu " : "submenu"}`}
      ref={container}
    >
      <h2>{page}</h2>
      <div className={`links ${columns}`}>
        {links.map((item, index) => {
          const { icon, label } = item;
          return (
            <p key={index}>
              {icon} {label}
            </p>
          );
        })}
      </div>
    </div>
  );
};









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//

//
//


//
//

export default Submenu;
