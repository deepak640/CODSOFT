import React, { useState, useEffect } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const List = ({ task }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (task) {
      setData((prev) => [...prev, task]);
    }
  }, [task]);

  const handleDeleteTodo = (item) => {
    setData((prev) => prev.filter((d) => d !== item));
  };

  return (
    <>
      {data.length ? (
        <ul className="tasks">
          {data.map((item, index) => {
            return (
              <li className="items" key={index} data-aos="zoom-in">
              <div>
                <p>{item}</p>
                <p>date</p>
              </div>
                <div>
                <EditOutlined style={{color:'blue'}}  className="icon"/>
                <DeleteOutlined style={{color:'red'}} className="icon"
                  onClick={() => handleDeleteTodo(item)}
                />
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="emptynote">add your data here</p>
      )}
    </>
  );
};

export default List;

