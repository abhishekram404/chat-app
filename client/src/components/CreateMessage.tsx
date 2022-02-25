import React from "react";

const CreateMessage = () => {
  return (
    <footer className="flex align-center mt-2 overflow-hidden rounded">
      <input
        type="text"
        className="flex-1  px-4 py-2 bg-slate-600 outline-none"
        placeholder="Enter your message here..."
      />
      <button className="bg-blue-700 p-2">Send</button>
    </footer>
  );
};

export default CreateMessage;
