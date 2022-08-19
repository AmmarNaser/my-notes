import React, { useEffect, useState } from "react";
import "./NoteList.css";
import CreateNote from "../modals/CreateNote";
import ListCard from "./ListCard";
import Masonry from "react-masonry-css";

const NoteList = () => {
  const [NoteList, setNoteList] = useState([]);

  useEffect(() => {
    const arr = localStorage.getItem("NoteList");

    if (arr) {
      const obj = JSON.parse(arr);
      setNoteList(obj);
    }
  }, []);

  const updateListArray = (obj, index) => {
    let tempList = NoteList;
    tempList[index] = obj;
    localStorage.setItem("NoteList", JSON.stringify(tempList));
    setNoteList(tempList);
    window.location.reload();
  };

  const saveNote = (taskObj) => {
    let tempList = NoteList;
    tempList.push(taskObj);
    localStorage.setItem("NoteList", JSON.stringify(tempList));
    setNoteList(tempList);
  };

  const deleteNote = (index) => {
    const tempList = NoteList;
    tempList.splice(index, 1);
    localStorage.setItem("NoteList", JSON.stringify(tempList));
    setNoteList(tempList);
    window.location.reload();
  };
  const breakpointColumnsObj = {
    default: 4,
    1920: 5,
    1820: 5,
    1720: 5,
    1620: 5,
    1520: 5,
    1420: 4,
    1320: 4,
    1220: 4,
    1120: 4,
    1080: 4,
    980: 3,
    880: 3,
    820: 2,
    720: 2,
    700: 2,
    500: 1,
  };
  return (
    <>
      <div className="header text-center">
        <CreateNote save={saveNote} />
      </div>

      <div className="card-container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {NoteList.map((obj, index) => (
            <ListCard
              taskObj={obj}
              index={index}
              key={index}
              deleteNote={deleteNote}
              update={updateListArray}
            />
          ))}{" "}
        </Masonry>
      </div>
    </>
  );
};

export default NoteList;
