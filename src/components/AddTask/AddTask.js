import React, { useState } from "react";
import "./AddTask.css";
function AddTaskComponent({ handleSubmit }) {
  const [input, setInput] = useState("");
  const handleOnChanged = (event) => {
    setInput(event.target.value);
  };
  const submit = (event) => {
    handleSubmit(input);
    event.preventDefault();
  };
  return (
    <div className="header-container">
      <form onSubmit={submit} className="form-add">
        <label>
          {"Enter Task here : "}
          <input
          className="input-field"
            type="text"
            name="task"
            value={input}
            onChange={handleOnChanged}
          />
        </label>
        <input className="button-submit" type="submit" value="Add Task" />
      </form>
    </div>
  );
}

export default AddTaskComponent;
