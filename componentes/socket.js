const express = require("express");
const PUERTO = 8080;
var cors = require("cors");
const app = express();

app.use(cors());
const http = require("http");
//const socket = require("socket.io");
//const { Socket } = require("socket.io");
const server = http.createServer(app);
const server2 = app.listen(PUERTO);

const { Server } = require("socket.io");
//const io = new Server(server);
const io = new Server(server2);
//const io = require("socket.io").listen(PUERTO);

app.get("/", (req, res) => {
  //res.send("<h1>Hello world</h1>");
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("SE CONECTO ALGIEN");
  socket.on("disconnect", () => {
    console.log("SE DESCONECTO ALGIEN");
  });
  // este "chat message y disconnect son ordenes de socket io, no cambies esto por que no anda sino
  //pero lo de abajo, el log, si pone lo que quieras "
  socket.on("chat message", (msg) => {
    console.log("CHAT message: " + msg);
  });
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  //console.log("ESTO ES EL SOCKET EN CRUDO!",socket)
});

/*
server.listen(3000, () => {
  console.log("listening on *:3000");
  //res.send(__dirname + "/index.html");
});
*/
server2;
console.log(`Escuchando en el puerto ${PUERTO}`);
//export function testredireccion() {}
