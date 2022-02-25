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
  socket.emit("server_message", {
    text: "You joined the chat.",
    serverMessage: true,
  });
  socket.broadcast.emit("server_message", {
    text: "A new user  joined the chat.",
    serverMessage: true,
  });

  socket.on("message", ({ text, id }) => {
    socket.emit("message", { text, id, self: true, serverMessage: false });
    socket.broadcast.emit("message", {
      text,
      id,
      self: false,
      serverMessage: false,
    });
  });

  socket.on("disconnect", () => {
    io.emit("server_message", {
      text: "Someone left the chat.",
      serverMessage: true,
    });
  });
});
httpServer.listen(4000);
