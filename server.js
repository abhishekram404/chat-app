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
  console.log("A new user joined the chat.");
  io.emit("A new user  joined the chat.");

  socket.on("disconnect", () => {
    console.log("Someone left the chat.");
    io.emit("Someone left the chat.");
  });
});
httpServer.listen(4000);
