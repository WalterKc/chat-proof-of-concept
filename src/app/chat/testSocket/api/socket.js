"use server";
import { Server } from "socket.io";

export default async function SocketHandler(req, res) {
  "use server";

  const io = new Server(res.socket.server);
  res.socket.server.io = io;
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

  console.log("Setting up socket");
  res.end();
}
