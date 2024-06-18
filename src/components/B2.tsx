import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function B2() {
  const stateShow: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>B2</h1>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ</th>
              <th colSpan={2}>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {stateShow.B2.map((item: any, index: number) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.birth}</td>
                <td>{item.address}</td>
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
