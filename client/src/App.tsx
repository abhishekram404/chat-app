import React from "react";
import Layout from "./components/Layout";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
function App() {
  return (
    <div className="App h-screen grid place-items-center bg-slate-900">
      <Layout />
    </div>
  );
}

export default App;
