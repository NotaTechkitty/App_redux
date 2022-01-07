import React, { useState } from "react";
import "./AddTask.css";
function AddTaskComponent({ handleSubmit, className }) {
  const [input, setInput] = useState("");
  const handleOnChanged = (event) => {
    setInput(event.target.value);
  };
  const submit = (event) => {
    handleSubmit(input);
    event.preventDefault();
  };
  return (
    <div className={className}>
      <form onSubmit={submit} className="form-add">
        <input className="button-submit" type="submit" value="Add Task" />
        <input
          className="input-field"
          type="text"
          name="task"
          value={input}
          onChange={handleOnChanged}
        />
      </form>
    </div>
  );
}

export default AddTaskComponent;
