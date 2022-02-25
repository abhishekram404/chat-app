import React from "react";
import { io } from "socket.io-client";

const isProduction = process.env.REACT_APP_NODE_ENV === "production";
export default io(isProduction ? "" : "http://localhost:4000");
