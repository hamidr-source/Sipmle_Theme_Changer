import React, { useState } from "react";
import "./style.css";

const ThemeChanger = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div>
      <button className={toggle ? "theme dark" : "theme" } onClick={() => setToggle(!toggle)}>
        <i className={toggle ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
      </button>
    </div>
  );
};

export default ThemeChanger;
