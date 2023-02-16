import React from "react";
import { useGlobalContext } from "./context";
const Container = () => {
const {closeSubmenu} = useGlobalContext();
  return <div className="main-container" onMouseOver={closeSubmenu}>
    {/* <div className="article-section">Content</div>
    <div className="image-section">Content</div> */}
  </div>;
};

export default Container;
