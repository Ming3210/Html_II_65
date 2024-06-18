import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function B5() {
  const stateShow: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const generate = () => {
    dispatch({ type: "GENERATE" });
  };
  return (
    <div>
      <h1>B5</h1>
      <div>[{stateShow.B5}]</div>
      <button onClick={generate}>Generate ramdom number</button>
    </div>
  );
}
