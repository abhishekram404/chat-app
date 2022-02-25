import React, { useContext, useEffect, useRef, useState } from "react";
import socket from "../utils/Socket";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const Conversation = () => {
  const [messages, setMessages] = useState<
    {
      text: string;
      id: string;
      self: boolean;
      serverMessage: boolean;
      username: string;
    }[]
  >([]);
  const [isTyping, setTyping] = useState({ state: false, username: "" });
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
      conversationViewRef.current.scrollIntoView({
        behavior: "smooth",
      });
    });

    return () => {
      socket.off("message");
    };
  });

  useEffect(() => {
    socket.on("server_message", (message) => {
      setMessages([...messages, message]);
      conversationViewRef.current.scrollIntoView({
        behavior: "smooth",
      });
    });

    return () => {
      socket.off("server_message");
    };
  });

  useEffect(() => {
    socket.on("user-typing", ({ username }: { username: string }) => {
      setTyping({
        state: true,
        username: username,
      });
    });

    return () => {
      socket.off("user-typing");
    };
  });
  useEffect(() => {
    socket.on("user-typing-blurred", ({ username }: { username: string }) => {
      setTyping({
        state: false,
        username: "",
      });
    });

    return () => {
      socket.off("user-typing-blurred");
    };
  });
  const conversationViewRef = useRef<any>(null);
  return (
    <main className="max-h-[700px] h-[500px] min-h-[500px] bg-slate-700 overflow-y-scroll overflow-x-hidden p-3 flex flex-col flex-1 scrollbar-hide rounded-lg">
      {messages.map(
        (message: {
          text: string;
          id: string;
          self: boolean;
          serverMessage: boolean;
          username: string;
        }) =>
          message.serverMessage ? (
            <div className="text-center text-sm text-white/50">
              {message.text}
            </div>
          ) : message.self ? (
            <SentMessage
              message={message.text}
              key={message.text}
              name={message.username}
            />
          ) : (
            <ReceivedMessage
              message={message.text}
              key={message.text}
              name={message.username}
            />
          )
      )}
      {isTyping.state && `${isTyping.username} is typing`}
      <span ref={conversationViewRef}></span>
    </main>
  );
};

export default Conversation;

//  {
//    self ? (
//      <SentMessage message={message.text} key={message.id} name={message.id} />
//    ) : (
//      <ReceivedMessage
//        message={message.text}
//        key={message.id}
//        name={message.id}
//      />
//    );
//  }
