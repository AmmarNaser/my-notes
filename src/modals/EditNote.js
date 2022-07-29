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
        <ModalHeader toggle={toggle}>Update Note</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="">Note Name</Label>
              <Input
                id=""
                name="NoteName"
                placeholder="with a placeholder"
                type="text"
                value={NoteName}
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

export default EditNote;
