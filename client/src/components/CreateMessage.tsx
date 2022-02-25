import React, { KeyboardEvent, useContext, useState } from "react";
import socket from "../utils/Socket";
import UserContext from "../utils/UserContext";

const CreateMessage = () => {
  const { username } = useContext(UserContext);
  const [newText, setNewText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewText(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText) {
      return;
    }
    socket.emit("message", {
      text: newText,
      id: socket.id,
      username: username,
    });
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
      <button className="bg-purple outline-none p-2" type="submit">
        Send
      </button>
    </form>
  );
};

export default CreateMessage;
