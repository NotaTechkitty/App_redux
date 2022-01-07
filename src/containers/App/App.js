import React, { useState } from "react";
import clsx from "clsx";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Background from "../../Assets/images/Background.jpg";
import { addTask } from "../../actions/AddTask";
import AddTaskComponent from "../TaskList/AddTask/AddTask";
import ListTask from "../TaskList";
import AsideMenu from "../../components/AsideMenu";
import Header from "../../components/Header";
import { iconMenu } from "../../configs/Constants/CommonIcons";
import IconButton from "../../components/IconButton";

function App() {
  const listTask = useSelector((state) => state.taskList);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => {
    if (open) {
      setOpen(false);
    } else setOpen(true);
  };

  const handleSubmit = (value) => {
    dispatch(addTask(value));
  };

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <AsideMenu
        menuButton={
          <IconButton
            onClick={handleOpenMenu}
            icon={iconMenu}
            className="button-menu"
          />
        }
        isOpen={open}
      />
      <div className={clsx("wrapper", open ? "menu-open" : "")}>
        <Header title={"TODO LIST"} />
        <ListTask taskList={listTask.data} />
        <AddTaskComponent handleSubmit={handleSubmit} className="footer" />
      </div>
    </div>
  );
}

export default App;
