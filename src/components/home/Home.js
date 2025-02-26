import React from "react";
import Navbar from "./Navbar";
import Notes from "./Notes";
import CreateNote from "./CreateNote";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Notes />
      </div>
      <div
        className="bg-dark position-fixed bottom-0 start-50 translate-middle-x"
        style={{ width: "100%" }}
      >
        <CreateNote />
      </div>
    </>
  );
};

export default Home;
