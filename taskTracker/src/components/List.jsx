import React from "react";
import {DeleteOutlined} from "@ant-design/icons"
const List = () => {
  return (
    <>
      <ul className="tasks">
        {[...Array(5)].map((_, index) => {
          return (
            <li className="items" key={index}>
              <p>items</p>
              <DeleteOutlined className="icon" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
