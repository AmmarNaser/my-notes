import React, { useState } from "react";
import "./TodoList.css";
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    setTaskList(tempList);
    setModal(false);
  };
  return (
    <>
      <div className="header text-center">
        <h1 className="">TodoList</h1>
        <button
          className="btn btn-primary mt-3"
          onClick={() => {
            setModal(true);
          }}
        >
          Add Task
        </button>
      </div>
      <div className="listContainer">
        {taskList.map((obj) => (
          <li>{obj.Name}</li>
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
