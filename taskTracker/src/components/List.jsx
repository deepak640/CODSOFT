import React, { useState, useEffect } from "react";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import moment from "moment";

const List = ({ task }) => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [edit, setEdit] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [tempTopic, setTempTopic] = useState("");
  const momentDate = moment().format("MMMM Do");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (task) {
      setData((prev) => [...prev, { topic: task, date: momentDate }]);
    }
  }, [task]);

  const handleEdit = (item, save) => {
    if (save) {
      setData((prev) =>
        prev.map((d) => {
          if (d === item) {
            return { ...d, topic: tempTopic, date: `edited at ${momentDate}` };
          }
          return d;
        })
      );
      setTempTopic("");
    }
    setEdit(!edit); // toggle edit state
    setEditingItem(save ? null : item);
  };

  const handleDeleteTodo = (item) => {
    setData((prev) => prev.filter((d) => d !== item));
  };

  return (
    <>
      {data.length ? (
        <ul className="tasks">
          {data.map((item, index) => (
            <li className="items" key={index} data-aos="zoom-in">
              <div>
                {edit && item === editingItem ? (
                  <p
                    id={`${edit && item === editingItem && "editable"}`}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => setTempTopic(e.target.textContent)}
                  >
                    {item.topic}
                  </p>
                ) : (
                  <p>{item.topic}</p>
                )}
                <p>{item.date}</p>
              </div>
              <div>
                {edit && item === editingItem ? (
                  <>
                    <CheckOutlined
                      className="icon icon-blue"
                      onClick={() => handleEdit(item, true)}
                    />
                    <CloseOutlined
                      className="icon icon-red"
                      onClick={() => handleEdit(item, false)}
                    />
                  </>
                ) : (
                  <>
                    <EditOutlined
                      className="icon icon-blue"
                      onClick={() => handleEdit(item, false)}
                    />
                    <DeleteOutlined
                      className="icon icon-red"
                      onClick={() => handleDeleteTodo(item)}
                    />
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="emptynote">add your data here</p>
      )}
    </>
  );
};

export default List;
