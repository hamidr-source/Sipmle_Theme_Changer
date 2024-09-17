import React, { useState } from "react";
import "./style.css";

const ThemeChanger = () => {
  const [toggle, setToggle] = useState(false);

  if (toggle) {
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#2e2e47b0";
  } else {
    document.body.style.color = "#2e2e47b0";
    document.body.style.backgroundColor = "#fff";
  }

  return (
    <div>
      <button
        className={toggle ? "theme dark" : "theme"}
        onClick={() => setToggle(!toggle)}
      >
        <i className={toggle ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
      </button>
    </div>
  );
};

export default ThemeChanger;
