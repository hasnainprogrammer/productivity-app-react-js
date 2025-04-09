import SingleTask from "./SingleTask";

function TasksList({ tasks, onDeleteTask, onCompletedTask }) {
  return tasks.length > 0 ? (
    <div className="w-1/2 flex flex-col justify-between items-start">
      <h1 className="text-xl mt-15 uppercase self-center tracking-[3px] my-5">
        Your Tasks
      </h1>

      <div className="w-full flex flex-col justify-center items-start my-3">
        <h2 className="w-full border-b border-gray-300 mb-2 uppercase">
          Must Do
        </h2>

        {tasks.map(
          (task, index) =>
            task.priority === "highest" && (
              <SingleTask
                key={index}
                bgColor="#ffc9c9"
                task={task}
                onDeleteTask={onDeleteTask}
                onCompletedTask={onCompletedTask}
              />
            )
        )}
      </div>

      <div className="w-full flex flex-col justify-center items-start my-3">
        <h2 className="w-full border-b border-gray-300 mb-2 uppercase">
          Should Do
        </h2>

        {tasks.map(
          (task, index) =>
            task.priority === "high" && (
              <SingleTask
                key={index}
                bgColor="#b2f2bb"
                task={task}
                onDeleteTask={onDeleteTask}
                onCompletedTask={onCompletedTask}
              />
            )
        )}
      </div>

      <div className=" w-full flex flex-col justify-center items-start my-3">
        <h2 className="w-full border-b border-gray-300 mb-2 uppercase">
          Nice To Do
        </h2>

        {tasks.map(
          (task, index) =>
            task.priority === "low" && (
              <SingleTask
                key={index}
                bgColor="#a5d8ff"
                task={task}
                onDeleteTask={onDeleteTask}
                onCompletedTask={onCompletedTask}
              />
            )
        )}
      </div>
    </div>
  ) : (
    <p className="my-8 bg-gray-300 py-2 px-70">No tasks yet</p>
  );
}

export default TasksList;
