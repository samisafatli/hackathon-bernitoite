const express = require("express")
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())

const APP_PORT = 5001;

app.listen(APP_PORT, () => {
  console.log(`Liefe API Listening on port ${APP_PORT}`);
});

app.get('/', (req, res) => {
  res.send("Welcome to liefe-api");
})

app.post('/user', (req, res) => {
  console.log('Bati', req.body);
  res.send({});
})


const server = require("http").createServer();
const io = require("socket.io")(server);
const CHAT_PORT = 5000;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(roomId);
  });
});

server.listen(CHAT_PORT, () => {
  console.log(`Liefe Chat Listening on port ${CHAT_PORT}`);
});