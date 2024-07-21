import React, { useEffect, useState } from "react";
import List from "./components/List";
import "./App.css";
import AOS from "aos";
import CompletedTask from "./components/CompletedTask";
import "aos/dist/aos.css";
const App = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTask(input);
      setInput("");
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [complete, setComplete] = useState(
    () => JSON.parse(localStorage.getItem("tasksCompleted")) || []
  );
  return (
    <>
      <h1 className="heading">Task Tracker</h1>
      <div className="container">
        <div className="taskContainer">
          <input
            type="text"
            className="search"
            placeholder="Note"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <List
            task={task}
            data={data}
            setComplete={setComplete}
            setData={setData}
          />
        </div>
        <CompletedTask data={complete} setData={setComplete} />
      </div>
    </>
  );
};

export default App;
