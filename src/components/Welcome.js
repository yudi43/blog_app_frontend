import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <>
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1>Blog App</h1>
      <Link to="/login">Login</Link>
      <div></div>
      <Link to="/signup">Signup</Link>
      <div></div>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </>
);
