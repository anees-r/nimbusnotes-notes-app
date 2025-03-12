import React, { useContext, useEffect } from "react";
import AppIcon from "../../icons/app-icon.png";
import { Link } from "react-router";
import noteContext from "../../context/notes/NoteContext";

const Login = () => {
  document.title = "NimbusNotes - Login";

  const test = useContext(noteContext);

  useEffect(() => {
    test.update("Anees New");
  }, []);
  return (
    <div
      className="bg-dark p-5 mx-auto my-5"
      style={{
        borderRadius: "20px",
        width: "60%",
        backgroundColor: "#ffffff",
        boxShadow: "0 0px 30px rgba(84, 239, 92, 0.17)",
      }}
    >
      <h6 className="text-warning text-center">This is {test.state.name}</h6>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Link to="/">
          <img src={AppIcon} style={{ height: "150px", width: "150px" }} />
        </Link>
        <h1
          className=""
          style={{
            color: "#2ECC71",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          NimbusNotes
        </h1>
        <p
          className="text-center"
          style={{
            color: "#9bbfae",
            fontSize: "15px",
          }}
        >
          Welcome back, you have been missed!
        </p>
        <form
          className="d-flex flex-column justify-content-between align-items-center"
          style={{ width: "100%" }}
        >
          <div className="col-md-4 my-2">
            <input
              type="text"
              className="form-control text-light border-success"
              id="inptitle"
              style={{ backgroundColor: "#5e736a" }}
              placeholder="Email"
            />
          </div>

          <div className=" col-md-4 my-2">
            <input
              type="text"
              className="form-control text-light border-success"
              id="inptags"
              style={{ backgroundColor: "#5e736a" }}
              placeholder="Password"
            />
          </div>

          <div className="text-light col-md-4 my-2">
            <button
              type="submit"
              className="btn btn-success"
              style={{ width: "100%" }}
            >
              Login
            </button>
          </div>
        </form>
        <p
          className="text-center"
          style={{
            color: "#9bbfae",
            fontSize: "15px",
          }}
        >
          Not a member?{" "}
          <span
            className="text-center"
            style={{
              color: "#2ECC71",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            <Link
              className="navbar-brand"
              style={{ textDecoration: "none" }}
              to="/register"
            >
              Register now!
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
