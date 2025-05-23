import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("myTasks")) || []);
  }, []);

  const addTask = (newTask) => {
    if (newTask.task !== "") {
      localStorage.setItem("myTasks", JSON.stringify([...tasks, newTask]));
      setTasks((prevState) => [...prevState, newTask]);
    } else {
      alert("please fill up the fields");
    }
  };

  const deleteTask = (taskId) => {
    let tasks = JSON.parse(localStorage.getItem("myTasks"));
    tasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  };

  const completedTask = (taskId) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === taskId ? { ...task, isCompleted: true } : task
      )
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto p-10 text-[#343a40]">
      <h1 className="mb-10 text-xl tracking-[3px] self-center uppercase">
        Productivity App - Prioritize What Matters
      </h1>
      <AddTask onAddTask={addTask} />
      <TasksList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onCompletedTask={completedTask}
      />
      <Footer />
    </div>
  );
}

export default App;
