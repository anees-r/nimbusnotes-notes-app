import React from "react";

const NoteItemPlaceholder = () => {
  return (
    <div>
      <div className="card border-success bg-dark my-3 mx-3 placeholder-glow">
        <div className="row mx-1 mt-2">
          <h6
            className="card-header text-success  placeholder col-4 mx-2 my-1"
            style={{ width: "60px", height: "25px" }}
          ></h6>
          <h6
            className="card-header text-success  placeholder col-4 mx-2 my-1"
            style={{ width: "60px", height: "25px" }}
          ></h6>
        </div>
        <div className="card-body text-light">
          <h3 className="card-title placeholder col-5 "></h3>
          <p
            className="card-text text-light placeholder col-11 mb-1 mt-2"
            style={{ height: "20px" }}
          ></p>
          <p
            className="card-text text-light placeholder col-12 my-1"
            style={{ height: "20px" }}
          ></p>
          <p
            className="card-text text-light placeholder col-5 my-1"
            style={{ height: "20px" }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default NoteItemPlaceholder;
