const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // सभी ओरिजिन को अलाऊ करने के लिए
    methods: ["GET", "POST"]
  }
});

// ✅✅ React Build के सही Path को सेट करें ✅✅
const frontendPath = path.join(__dirname, "../frontend/build"); // ".." बैकएंड के बाहर जाने के लिए

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

io.on("connection", (socket) => {
  console.log("User Connected: ", socket.id);

  socket.on("joinRoom", (room) => {
    socket.join(room);
  });

  socket.on("newMessage", ({ newMessage, room }) => {
    io.in(room).emit("getLatestMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected: ", socket.id);
  });
});

const port = process.env.PORT || 9000;

server.listen(port, () => console.log(`Server running on port ${port}`));
