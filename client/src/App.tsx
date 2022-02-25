import React, { useEffect, useState } from "react";
import AddUsername from "./components/AddUsername";
import Layout from "./components/Layout";
import socket from "./utils/Socket";
import UserContext from "./utils/UserContext";
function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    socket.on("username", (data: { username: string }) => {
      setUsername(data.username);
    });
    return () => {
      socket.off("username");
    };
  });

  return (
    <UserContext.Provider value={{ username: username, id: socket.id }}>
      <div className="App h-screen grid place-items-center bg-slate-900 min-h-screen w-full">
        {username ? <Layout /> : <AddUsername />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
