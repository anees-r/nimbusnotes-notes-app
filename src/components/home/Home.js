import React from "react";
import Navbar from "./Navbar";
import Notes from "./Notes";
import CreateNote from "./CreateNote";

const Home = () => {
  document.title = "NimbusNotes - Home";
  return (
    <>
      <Navbar />
      <div
        className="container bg- overflow-scroll"
        style={{ height: "95vw", paddingTop: "70px" }}
      >
        <Notes />
      </div>
      <div
        className="bg-dark position-fixed bottom-0 start-50 translate-middle-x"
        style={{
          width: "100%",
          zIndex: "101",
          boxShadow: "0 10px 30px rgba(84, 239, 92, 0.17)",
        }}
      >
        <CreateNote />
      </div>
    </>
  );
};

export default Home;
