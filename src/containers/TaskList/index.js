import React from "react";
import "./ListTask.css";
import TaskItems from "./TaskItems";
function ListTask({ taskList }) {
  return (
    <div className="list-container">
      {taskList.map((task, id) => (
        <TaskItems task={task} />
      ))}
    </div>
  );
}

export default ListTask;
