import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

const EditTask = ({ toggle, modal, obj, update }) => {
  const [taskName, setTaskName] = useState(" ");
  const [description, setDescription] = useState(" ");

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };
  const updateHandler = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    update(tempObj);
  };

  useEffect(() => {
    setTaskName(obj.Name);
    setDescription(obj.Description);
  }, []);

  return (
    <>
      <Modal centered scrollable isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="">Task Name</Label>
              <Input
                id=""
                name="taskName"
                placeholder="with a placeholder"
                type="text"
                value={taskName}
                onChange={changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText" sm={2}>
                Description
              </Label>
              <Input
                id="exampleText"
                name="description"
                type="textarea"
                value={description}
                onChange={changeHandler}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateHandler}>
            Update
          </Button>{" "}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditTask;
