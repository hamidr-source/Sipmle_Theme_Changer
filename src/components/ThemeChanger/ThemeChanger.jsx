import React, { useState } from "react";
import "./style.css";

const btn = document.querySelector("button");
const icon = document.querySelector("i");

const ThemeChanger = () => {
  const [toggle, setToggle] = useState(false);

  function hansleChangeBgColor (e) {
    setToggle(() => !toggle)
  }

  return (
    <div>
      <button className={toggle ? "theme dark" : "theme" } onClick={(e) => hansleChangeBgColor(e)}>
        <i className={toggle ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
      </button>
    </div>
  );
};

export default ThemeChanger;
