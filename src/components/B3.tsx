import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function B3() {
  const stateShow: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>B3</h1>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th colSpan={2}>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {stateShow.B3.map((item: any, index: number) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>

                <td>
                  <button>Xóa</button>
                </td>
                <td>
                  <button>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
