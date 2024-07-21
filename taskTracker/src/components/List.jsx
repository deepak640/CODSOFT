import React, { useState, useEffect } from "react";
import moment from "moment";
import Task from "./Task";

const momentDate = moment().format("MMMM Do");
const List = ({ task, setData, data, setComplete }) => {
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (task) {
      setData((prev) => [...prev, { topic: task, date: momentDate }]);
    }
  }, [task]);

  const handleEdit = (item, newTopic) => {
    setData((prev) =>
      prev.map((d) => {
        if (d === item) {
          return { ...d, topic: newTopic, date: `edited at ${momentDate}` };
        }
        return d;
      })
    );
  };

  const handleDeleteTodo = (item) => {
    setData((prev) => prev.filter((d) => d !== item));
  };
  const handleComplete = (task) => {
    setComplete((prev) => [
      ...prev,
      data.filter(({ topic }) => topic === task)[0],
    ]);
    setData((prev) => prev.filter(({ topic }) => topic !== task));
  };
  return (
    <>
      {data.length ? (
        <ul className="tasks">
          {data.map((item) => (
            <Task
              key={item.topic}
              item={item}
              onDelete={handleDeleteTodo}
              onEdit={handleEdit}
              onComplete={handleComplete}
            />
          ))}
        </ul>
      ) : (
        <p className="emptynote">add your data here</p>
      )}
    </>
  );
};

export default List;
