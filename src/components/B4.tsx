import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Count() {
  const stateCount: any = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({
      type: "INCREASE",
    });
  };
  const decrease = () => {
    dispatch({
      type: "DECREASE",
    });
  };

  return (
    <div>
      <h1>B4</h1>
      <p>Giá trị count :{stateCount.B4}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease}>Giảm</button>
    </div>
  );
}
