import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTask({ onAddTask }) {
  const [task, setTask] = useState({
    task: "",
    priority: "highest",
    isCompleted: false,
  });
  const handleChange = (e) => {
    if (e.target.id === "task") {
      setTask((prevState) => {
        return { task: e.target.value, priority: prevState.priority };
      });
    } else if (e.target.id === "priority") {
      setTask((prevState) => {
        return { task: prevState.task, priority: e.target.value };
      });
    }
  };

  const handleClick = () => {
    onAddTask({ id: uuidv4(), ...task });
    setTask({ task: "", priority: "highest", isCompleted: false });
  };

  return (
    <div className="w-1/2 bg-[#f1f3f5] flex flex-col items-start p-4 rounded shadow ">
      <div className="w-full flex justify-center items-center space-x-3">
        <input
          type="text"
          className="w-full border-1 border-gray-300 outline-none py-2 px-3 text-base rounded focus:border-blue-400"
          placeholder="Add your task here"
          id="task"
          value={task.task}
          onChange={handleChange}
        />
        <select
          className="border-1 border-gray-300 outline-none py-2 py-2 px-1  text-base rounded focus:border-blue-400 cursor-pointer"
          id="priority"
          value={task.priority}
          onChange={handleChange}
        >
          <option value="highest">Must Do</option>
          <option value="high">Should Do</option>
          <option value="low">Nice to Do</option>
        </select>
        <button
          className="cursor-pointer bg-blue-500 py-2 px-8 rounded text-white font-medium tracking-wider uppercase"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTask;
