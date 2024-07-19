import React, { useEffect, useState } from "react";
import List from "./components/List";
import "./App.css";
import AOS from "aos";
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
  return (
    <div className="container">
      <h1 className="heading">Task Tracker</h1>
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
        <List task={task} />
      </div>
    </div>
  );
};

export default App;

