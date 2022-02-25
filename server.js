const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.emit("server_message", "You joined the chat.");
  socket.broadcast.emit("server_message", "A new user  joined the chat.");

  io.on("message", (message) => {
    io.emit(message);
  });
  socket.emit("message", { text: "Hello world", id: socket.id });

  socket.on("disconnect", () => {
    io.emit("server_message", "Someone left the chat.");
  });
});
httpServer.listen(4000);
