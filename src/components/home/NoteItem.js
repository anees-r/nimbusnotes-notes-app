import React from "react";

const NoteItem = () => {
  return (
    <div>
      <div className="card border-success bg-dark my-3 mx-3">
        <h6 className="card-header text-success">tag1, tag2</h6>
        <div className="card-body text-light">
          <h3 className="card-title">My title</h3>
          <p className="card-text text-light">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
