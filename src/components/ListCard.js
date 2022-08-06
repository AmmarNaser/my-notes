import React, { useState } from "react";
import "./ListCard.css";
import { colors } from "./color";
import EditNote from "../modals/EditNote";

const ListCard = ({ taskObj, index, deleteNote, update }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const updateNote = (obj) => {
    update(obj, index);
  };

  const deleteHandler = () => {
    deleteNote(index);
  };

  const addHandler = () => {
    setModal(true);
  };

  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            backgroundColor: colors[index % 5].secondaryColor,
          }}
        >
          {taskObj.Name}
        </span>
        <div className="m-4  discription">{taskObj.Description}</div>

        <div className="icon-container">
          <i
            className="far fa-edit mr-3"
            onClick={addHandler}
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
          ></i>
          <i
            className="fas fa-trash-alt"
            onClick={deleteHandler}
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
          ></i>
        </div>
      </div>
      <EditNote
        toggle={toggle}
        modal={modal}
        update={updateNote}
        obj={taskObj}
      />
    </div>
  );
};

export default ListCard;
