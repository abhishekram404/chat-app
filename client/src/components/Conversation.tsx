import React, { useContext, useEffect, useRef, useState } from "react";
import socket from "../utils/Socket";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";
import Typing from "./Typing";

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
      scrollToBottom();
    });

    return () => {
      socket.off("message");
    };
  });

  useEffect(() => {
    socket.on("server_message", (message) => {
      setMessages([...messages, message]);
      scrollToBottom();
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
      scrollToBottom();
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
      scrollToBottom();
    });

    return () => {
      socket.off("user-typing-blurred");
    };
  });

  const scrollToBottom = () =>
    conversationViewRef.current.scrollIntoView({
      behavior: "smooth",
    });
  const conversationViewRef = useRef<any>(null);
  return (
    <main className="sm:max-h-[500px] h-[500px] max-h-[95%]  bg-slate-700 overflow-y-scroll overflow-x-hidden p-3 pb-8 flex flex-col flex-1 scrollbar-hide rounded-lg transition-all">
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
      {isTyping.state && <Typing username={isTyping.username} />}
      <span ref={conversationViewRef}></span>
    </main>
  );
};

export default Conversation;
