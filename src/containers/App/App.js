import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../actions/AddTask";
import AddTaskComponent from "../../components/AddTask/AddTask";
import AsideMenu from "../../components/AsideMenu/aside-menu";

import ListTask from "../../components/ListTask/ListTask";

function App() {
  const listTask = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    dispatch(addTask(value));
  };

  return (
    <>
      <AsideMenu />
      <div className="wrapper">
        <AddTaskComponent handleSubmit={handleSubmit} />
        <ListTask taskList={listTask.data} title={"List of Tasks"} />
      </div>
    </>
  );
}

export default App;
