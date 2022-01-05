import React from "react";
import "./ListTask.css";
function ListTask({ taskList, title = "" }) {
  return (
    <div className="list-container">
      <h3 className="list-header">{title}</h3>
      <hr />
      <ul>
        {taskList.map((task, id) => (
          <li key={id}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListTask;
