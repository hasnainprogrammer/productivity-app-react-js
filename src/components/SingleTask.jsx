import React, { useState } from "react";

function SingleTask({ bgColor, task, onDeleteTask, onCompletedTask }) {
  return (
    task && (
      <div
        className={`bg-[${bgColor}] w-full flex justify-between items-center text-base space-x-4 my-1 p-4`}
      >
        <p className={task.isCompleted && "line-through"}>{task.task}</p>
        <div className="flex justify-center items-center space-x-8">
          <button
            className="text-2xl cursor-pointer transition hover:transform-[scale(1.2)]"
            onClick={() => onDeleteTask(task.id)}
          >
            &times;
          </button>
          <button
            className="text-2xl cursor-pointer transition hover:transform-[scale(1.2)]"
            onClick={() => onCompletedTask(task.id)}
          >
            &#10003;
          </button>
        </div>
      </div>
    )
  );
}

export default SingleTask;
