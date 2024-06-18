import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function B1() {
  const stateShow: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>B1</h1>
      <div>
        {stateShow.B1.map((item: any, index: number) => {
          return (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.gender}</p>
              <p>{item.birth}</p>
              <p>{item.address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
