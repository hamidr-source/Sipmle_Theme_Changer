import React, { useState } from "react";
import "./style.css";

const btn = document.querySelector("button");
const icon = document.querySelector("i");

const ThemeChanger = () => {
  const [toggle, setToggle] = useState(false);

  function hansleChangeBgColor (e) {
    setToggle(() => !toggle)
    console.log(toggle)
  }

  return (
    <div>
      <button className="theme" onClick={(e) => hansleChangeBgColor(e)}>
        <i className="fa-solid fa-moon"></i>
      </button>
    </div>
  );
};

export default ThemeChanger;
