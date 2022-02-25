import React from "react";

const Layout = () => {
  return (
    <div className="max-w-[600px] min-w-[600px] bg-slate-800 p-3 rounded text-white">
      <div className="chat h-full flex flex-col">
        <header className="mb-2">
          <h2 className="text-xl text-center">Messages</h2>
        </header>
        <main className="max-h-[800px] h-[500px] min-h-[500px] bg-slate-700 overflow-y-scroll overflow-x-hidden p-3 flex flex-col flex-1 scrollbar-hide rounded-lg">
          <SentMessage message="Hello, Sandy!" name="You" />
          <SentMessage message="How are you, bud?" name="You" />
          <ReceivedMessage message="Hey, Rachel!" name="Sandy" />
          <ReceivedMessage message="I'm good." name="Sandy" />
          <ReceivedMessage />
        </main>
        <footer className="flex align-center mt-2 overflow-hidden rounded">
          <input
            type="text"
            className="flex-1  px-4 py-2 bg-slate-600 outline-none"
            placeholder="Enter your message here..."
          />
          <button className="bg-blue-700 p-2">Send</button>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

const SentMessage = ({
  message,
  name,
}: {
  message?: string;
  name?: string;
}) => {
  return (
    <div className="self-end flex flex-col justify-end mb-2 max-w-[400px]">
      <small className="text-2xs text-slate-300 self-end mr-1 mb-1">
        {name ?? "User"}
      </small>
      <div className="bg-blue-700 rounded-2xl px-4 py-2 self-end flex flex-col">
        {message ?? <i className="text-sm">Message from {name ?? "User"}</i>}
      </div>
    </div>
  );
};

const ReceivedMessage = ({
  message,
  name,
}: {
  message?: string;
  name?: string;
}) => {
  return (
    <div className="self-start flex flex-col justify-end mb-2 max-w-[400px]">
      <small className="text-[.7rem] text-slate-300 self-start ml-1 mb-1">
        {name ?? "User"}
      </small>
      <div className="bg-slate-500 rounded-2xl px-4 py-2 self-end flex flex-col">
        {message ?? <i className="text-sm">Message from {name ?? "User"}</i>}
      </div>
    </div>
  );
};
