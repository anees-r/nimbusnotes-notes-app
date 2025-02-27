import React from "react";
import NoteItem from "./NoteItem";
import NoteItemPlaceholder from "./NoteItemPlaceholder";

const Notes = () => {
  return (
    <div>
      <h2
        className="text-center"
        style={{ color: "#9bbfae", fontWeight: "bold" }}
      >
        All Notes
      </h2>
      <div className="row">
        <div className="col-md-4 my-2">
          <NoteItemPlaceholder />
        </div>
        <div className="col-md-4 my-2">
          <NoteItem />
        </div>
      </div>
    </div>
  );
};

export default Notes;
