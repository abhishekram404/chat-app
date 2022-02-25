import React, { KeyboardEvent, useState } from "react";
import socket from "../utils/Socket";

const CreateMessage = () => {
  const [newText, setNewText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewText(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit("message", { text: newText, id: socket.id });
    setNewText("");
  };
  return (
    <form
      className="flex align-center mt-2 overflow-hidden rounded"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="flex-1  px-4 py-2 bg-slate-600 outline-none"
        placeholder="Enter your message here..."
        onChange={handleChange}
        value={newText}
      />
      <button className="bg-blue-700 p-2" type="submit">
        Send
      </button>
    </form>
  );
};

export default CreateMessage;
