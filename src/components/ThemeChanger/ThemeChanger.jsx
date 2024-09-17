import React from "react";
import "./style.css";

const ThemeChanger = () => {
  function handleClickBgColor() {}

  return (
    <div className="theme">
      <button onClick={handleClickBgColor}>
        <i className="fa-solid fa-sun"></i>
      </button>
    </div>
  );
};

export default ThemeChanger;
