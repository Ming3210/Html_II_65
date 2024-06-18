// ThemeComponent.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css"; // Create this CSS file to handle the styles

export default function B7() {
  const stateShow = useSelector((state: any) => state.B7.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div className={`${stateShow}`}>
      <h1>B7+B8</h1>
      <label>
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={stateShow === "dark"}
        />
        Toggle Dark Mode
      </label>
    </div>
  );
}
