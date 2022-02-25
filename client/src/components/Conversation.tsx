import React, { useContext, useEffect, useState } from "react";
import socket from "../utils/Socket";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const Conversation = () => {
  const [messages, setMessages] = useState<{ text: string; id: string }[]>([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.off("message");
    };
  });

  return (
    <main className="max-h-[800px] h-[500px] min-h-[500px] bg-slate-700 overflow-y-scroll overflow-x-hidden p-3 flex flex-col flex-1 scrollbar-hide rounded-lg">
      {messages.map((message: { text: string; id: string }) => (
        <SentMessage
          message={message.text}
          key={message.id}
          name={message.id}
        />
      ))}
    </main>
  );
};

export default Conversation;
