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

var users = [];

io.on("connection", (socket) => {
  socket.on("set-username", ({ username }) => {
    // const usernameAlreadyTaken = users.some(
    //   (user) => user.username === username
    // );

    socket.username = username;
    socket.emit("username", { username: username });
    socket.emit("server_message", {
      text: "You joined the chat.",
      serverMessage: true,
    });
    socket.broadcast.emit("server_message", {
      text: `${socket?.username || "A new user"}  joined the chat.`,
      serverMessage: true,
    });

    users = [...users, { username: socket.username, id: socket.id }];
    console.log(users);
  });

  socket.on("message", ({ text, id, username }) => {
    socket.emit("message", {
      text,
      id,
      username: username === socket.username ? "You" : username,
      self: true,
      serverMessage: false,
    });
    socket.broadcast.emit("message", {
      text,
      id,
      username: username,
      self: false,
      serverMessage: false,
    });
  });

  socket.on("disconnect", () => {
    io.emit("server_message", {
      text: `${socket.username} left the chat.`,
      serverMessage: true,
    });
    users = users.filter((user) => user.id !== socket.id);
    console.log(users);
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
