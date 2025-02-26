import React from "react";

const CreateNote = () => {
  return (
    <div className="mb-0">
      <div
        className="container  p-4 col-md-6 "
        style={{ borderRadius: "20px" }}
      >
        <form className="d-flex flex-column justify-content-between align-items-center">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-8 my-2">
              <input
                type="text"
                className="form-control text-light border-success"
                id="inptitle"
                style={{ backgroundColor: "#404e4c" }}
              />
            </div>

            <div className=" col-md-4 my-2">
              <input
                type="text"
                className="form-control text-light border-success"
                id="inptags"
                style={{ backgroundColor: "#404e4c" }}
              />
            </div>
          </div>

          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-11 my-2">
              <input
                type="text"
                className="form-control text-light border-success"
                id="inpnote"
                style={{ backgroundColor: "#404e4c" }}
              />
            </div>

            <div className="text-light col-1 my-2">
              <button type="submit" className="btn btn-success">
                +
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
