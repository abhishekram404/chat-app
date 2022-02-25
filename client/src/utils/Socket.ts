import React from "react";
import { io } from "socket.io-client";

const isProduction = process.env.REACT_APP_NODE_ENV === "production";
const socket = io(isProduction ? "" : "http://localhost:4000", {
  autoConnect: false,
});
socket.on("connect", () => console.log("Connected"));

export default socket;
