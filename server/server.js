const io = require("socket.io")(3000, {
  cors: { origin: "http://localhost:3001", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {});

  socket.on("message", (mensaje, roomName) => {
    console.log("mensaje de chat TOTAL", mensaje, roomName);
    console.log("TAMAÑO DEL MENSAJE", mensaje.length);
    console.log("TAMAÑO DEL ROOM", roomName.toString().length);

    if (roomName.toString().length) {
      io.to(roomName).emit("message", mensaje);
    } else {
      if (mensaje === undefined) {
        console.log("mensaje de chat", roomName);
        io.emit("message", roomName);
      } else if (roomName === undefined) {
        console.log("mensaje de chat", mensaje);
        io.emit("message", mensaje);
      } else {
        console.log("mensaje de chat", mensaje, roomName);
        io.emit("message", mensaje, roomName);
      }
    }
  });
  //
  socket.on("joinRoom", (roomName) => {
    console.log("UNIENDOSE A LA ROOM", roomName);
    socket.join(roomName);
  });
  //

  socket.on("joinRoom", function (roomName) {
    var roomlength = roomName.toString().length;
  });
});

/**
 * esto lo que hace es facil, si un usuario/socket se conecta, se muestra un mensaje
 */
console.log("hola mundo!");
