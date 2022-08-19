import React, { useState } from "react";
import "./CreateNote.css";
const CreateNote = (props) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const changeTitleHandler = (event) => {
    setTaskName(event.target.value);
  };
  const changeDesHandler = (event) => {
    setDescription(event.target.value);
  };

  const savehandler = (event) => {
    // event.preventDefault();
    const taskObj = {
      Name: taskName,
      Description: description,
    };
    props.save(taskObj);
    setTaskName("");
    setDescription("");
    window.location.reload();
  };

  return (
    <form className="Form" onSubmit={savehandler}>
      <div className="FTit">
        <label hidden>Note Name</label>
        <input
          className="Title"
          id="notes"
          name="taskName"
          placeholder="Title"
          type="text"
          value={taskName}
          onChange={changeTitleHandler}
          autoComplete="off"
        />
      </div>
      <div className="FDes">
        <label sm={2} hidden>
          Description
        </label>
        <textarea
          className="Des"
          id="exampleText"
          name="description"
          type="textarea"
          value={description}
          onChange={changeDesHandler}
          placeholder="Details"
        ></textarea>
      </div>
      <div className="FBut">
        <button className="butt" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default CreateNote;

// const { name, value } = e.target;

// if (name === "taskName") {
//   setTaskName(value);
// } else {
//   setDescription(value);
// }
// };
// let taskObj = {};
// taskObj["Name"] = taskName;
// taskObj["Description"] = description;
// save(taskObj);

// {
//   /* <button className="" onClick={toggle}>
//   Cancel
// </button> */
// }
