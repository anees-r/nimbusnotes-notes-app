import React from "react";
import { Link } from "react-router";
import AppIcon from "../../icons/app-icon.png";
import LogoutIcon from "../../icons/logout-icon.png";

const Navbar = () => {
  return (
    <div>
      <div
        className="d-flex position-fixed justify-content-between align-items-center bg-dark"
        style={{
          height: "55px",
          width: "100%",
          zIndex: "100",
          boxShadow: "0 -10px 30px rgba(84, 239, 92, 0.17)",
        }}
      >
        <Link to="/home">
          <img
            src={AppIcon}
            alt="NimbusNotes Logo"
            style={{ height: "40px", border: "none" }}
            className="btn mx-2"
          />
        </Link>
        <Link
          className="navbar-brand"
          to="/home"
          style={{
            color: "#2ECC71",
            textDecoration: "none",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          NimbusNotes
        </Link>
        <Link to="/">
          <img
            src={LogoutIcon}
            alt="Logout Icon"
            style={{ height: "40px", border: "none" }}
            className="btn mx-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
