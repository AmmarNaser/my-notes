import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./EditNote.css";

const EditNote = ({ toggle, modal, obj, update }) => {
  const [NoteName, setNoteName] = useState(" ");
  const [description, setDescription] = useState(" ");

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "NoteName") {
      setNoteName(value);
    } else {
      setDescription(value);
    }
  };
  const updateHandler = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = NoteName;
    tempObj["Description"] = description;
    update(tempObj);
  };

  useEffect(() => {
    setNoteName(obj.Name);
    setDescription(obj.Description);
  }, [obj.Description, obj.Name]);

  return (
    <>
      <Modal centered scrollable isOpen={modal} toggle={toggle}>
        <ModalHeader className="Header" toggle={toggle}></ModalHeader>
        <ModalBody className="ModalBody">
          <form className="Forma">
            <div className="Forma2">
              <label for="" hidden>
                Note Name
              </label>
              <input
                className="Input1"
                id=""
                name="NoteName"
                placeholder="Edit Title"
                type="text"
                value={NoteName}
                onChange={changeHandler}
              />
            </div>
            <div className="Forma3">
              <label for="exampleText" sm={2} hidden>
                Description
              </label>
              <textarea
                className="TextArea"
                id="exampleText"
                placeholder="Edite Details"
                name="description"
                type="textarea"
                value={description}
                onChange={changeHandler}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter className="Footer">
          <button className="Update" type="submit" onClick={updateHandler}>
            Update
          </button>{" "}
          <button className="Cancel" onClick={toggle}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditNote;
