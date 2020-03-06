import React from "react";
import deniedImg from "../assets/denied.svg";
export default function NotLogged() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#d1f5fd"
      }}
    >
      <h1 style={{ textAlign: "center" }}>No has iniciado sesión</h1>
      <img src={deniedImg} style={{ width: "50%" }}></img>
    </div>
  );
}
