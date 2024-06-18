import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function B6() {
  const stateShow: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const handleChage = () => {
    dispatch({ type: "CHANGE" });
  };
  return (
    <div>
      <h1>B6</h1>
      <div>{stateShow.B6}</div>
      <button onClick={handleChage}>Change State</button>
    </div>
  );
}
