import React, { useEffect, useState } from "react";
import socket from "../utils/Socket";
const AddUsername = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) return;
    await socket.connect();
    socket.on("connect", () => {
      socket.emit("set-username", { username: username.trim() });
    });
  };

  return (
    <form
      className="p-3 bg-slate-800 rounded-lg  flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl text-white text-center mb-2">Add username</h3>
      <input
        type="text"
        className="bg-slate-600 py-1 px-3 text-white outline-none rounded"
        onChange={handleChange}
        value={username}
      />
      <button className="bg-purple p-1 text-white rounded" type="submit">
        Join the party
      </button>
    </form>
  );
};

export default AddUsername;
