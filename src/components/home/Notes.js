import React from "react";
import NoteItem from "./NoteItem";

const Notes = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 my-2">
          <NoteItem />
        </div>
      </div>
    </div>
  );
};

export default Notes;
