import React, { useEffect, useState } from "react";
import "./TodoList.css";
import CreateTask from "../modals/CreateTask";
import ListCard from "./ListCard";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const arr = localStorage.getItem("taskList");

    if (arr) {
      const obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);
  const toggle = () => {
    setModal(!modal);
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  const deleteTask = (index) => {
    const tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  return (
    <>
      <div className="header text-center">
        <h1 className="">TodoList</h1>
        <button
          onClick={() => {
            setModal(true);
          }}
          className=" btn btn-primary add-button"
        >
          New
        </button>
      </div>
      <div className="card-container">
        {taskList.map((obj, index) => (
          <ListCard
            taskObj={obj}
            index={index}
            key="{card}"
            deleteTask={deleteTask}
            update={updateListArray}
          />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
