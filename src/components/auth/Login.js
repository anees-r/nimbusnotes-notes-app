import React from "react";
import AppIcon from "../../icons/app-icon.png";

const Login = () => {
  return (
    <div
      className="bg-danger position-fixed bottom-50 start-50 translate-middle-x translate-middle-y"
      style={{ borderRadius: "20px" }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={AppIcon} style={{ height: "150px", width: "150px" }} />
        <h1 className="text-light">NimbusNotes</h1>
      </div>
    </div>
  );
};

export default Login;
