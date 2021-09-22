const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./router");
const cors = require("cors");
const { addUser, removeUser, getUser, getUserInRoom } = require("./Users");
const server = http.createServer(app);
const io = new Server(server);
app.use(router);
app.use(cors());
io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    socket.emit("message", {
      user: "ادمین سایت",
      text: `سلام ${name} عزیز خوش اومدی :) لطفا آدم باش`,
    });
    socket.broadcast.to(room).emit("message", {
      user: "ادمین سایت",
      text: `${name} 
    اضافه شد`,
    });
    socket.join(room);
    callback();
  });
  socket.on("sendMessage", ({ message, name, room }, callback) => {
    io.to(room).emit("message", { user: name, text: message });
    callback();
  });
  socket.on("disconnect", (name, room) => {
    io.to(room).emit("message", {
      user: "ادمین سایت",
      text: `${name} لفت داد متاسفانه`,
    });
  });
});
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
