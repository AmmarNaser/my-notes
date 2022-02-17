import React, { useState } from "react";
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

const CreateTask = ({ toggle, modal, save }) => {
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
  const savehandler = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
  };
  return (
    <>
      <Modal centered scrollable isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Task</ModalHeader>
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
          <Button color="primary" onClick={savehandler}>
            Create
          </Button>{" "}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateTask;
