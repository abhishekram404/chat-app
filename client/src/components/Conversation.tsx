import React from "react";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const Conversation = () => {
  return (
    <main className="max-h-[800px] h-[500px] min-h-[500px] bg-slate-700 overflow-y-scroll overflow-x-hidden p-3 flex flex-col flex-1 scrollbar-hide rounded-lg">
      <SentMessage message="Hello, Sandy!" name="You" />
      <SentMessage message="How are you, bud?" name="You" />
      <ReceivedMessage message="Hey, Rachel!" name="Sandy" />
      <ReceivedMessage message="I'm good." name="Sandy" />
      <ReceivedMessage />
    </main>
  );
};

export default Conversation;
