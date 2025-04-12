const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const path = require("path");
const cors = require("cors");
const router = require("./routes/Auth");
const mongoose = require("mongoose")

const app = express();
app.use(cors());
app.use(cors({ origin: "https://bright-moxie-e075f9.netlify.app", credentials: true }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB", err));


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
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

app.use("/api/auth",router)


const port = process.env.PORT || 9000;

server.listen(port, () => console.log(`Server running on port ${port}`));
