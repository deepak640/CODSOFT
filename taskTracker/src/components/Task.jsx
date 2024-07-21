import React, { useState } from "react";
import {
  CheckCircleOutlined,
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

const Task = ({ item, onDelete, onEdit,onComplete }) => {
  const [editing, setEditing] = useState(false);
  const [tempTopic, setTempTopic] = useState(item.topic);

  const handleEdit = (save) => {
    if (save) {
      onEdit(item, tempTopic);
      setTempTopic("");
    }
    setEditing(!editing);
  };
  return (
    <li className="items" data-aos="zoom-in" key={item.topic}>
      <div>
        {editing ? (
          <p
            id={editing && "editable"}
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
        {editing ? (
          <>
            <CheckOutlined
              className="icon icon-blue"
              onClick={() => handleEdit(true)}
            />
            <CloseOutlined
              className="icon icon-red"
              onClick={() => handleEdit(false)}
            />
          </>
        ) : (
          <>
            <EditOutlined
              className="icon icon-blue"
              onClick={() => setEditing(true)}
            />
            <CheckCircleOutlined className="icon icon-blue" onClick={()=>{ onComplete(item.topic)}} />
            <DeleteOutlined
              className="icon icon-red"
              onClick={() => onDelete(item)}
            />
          </>
        )}
      </div>
    </li>
  );
};

export default Task;
