const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
const httpServer = createServer(app);

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

const io = new Server(httpServer, {
  cors: {
    origin: isProduction
      ? "https://abhishekram404-chat-app.herokuapp.com"
      : "http://localhost:3000",
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

if (isProduction) {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 4000;
httpServer.listen(port);
