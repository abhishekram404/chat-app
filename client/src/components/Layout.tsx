import React from "react";
import Conversation from "./Conversation";
import CreateMessage from "./CreateMessage";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="max-w-[600px] min-w-[600px] bg-slate-800 p-3 rounded text-white">
      <div className="chat h-full flex flex-col">
        <Header />
        <Conversation />
        <CreateMessage />
      </div>
    </div>
  );
};

export default Layout;
