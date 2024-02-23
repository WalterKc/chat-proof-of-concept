"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { io } from "socket.io-client";

export default function Chat(props) {
  console.log("DATOS QUE LLEGAN", props);
  const Datos = useSearchParams();
  const nombreDelServer = Datos.get("Datos");

  const [socket, setSocket] = useState(undefined);
  //aca se guarda el socket(su estado), puede ser util mas adelante
  const [inbox, setInbox] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [roomName, setRoomName] = useState("");

  const manejarMensaje = () => {
    socket.emit("message", mensaje, roomName);
    console.log("SE ENVIO EL MENSAJE!");
  };
  const manejarRoomName = () => {
    socket.emit("joinRoom", roomName);
    console.log("SE ENVIO EL ROOMNAME!");

    setInbox((inbox) => [
      ...inbox,
      `${nombreDelServer} se cambio al la room ${roomName}`,
    ]);
  };

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("message", (mensaje) => {
      console.log("ESTOS ES LO QUE LLEGA DEL SERVER!", mensaje);
      setInbox((inbox) => [...inbox, `${nombreDelServer}: ${mensaje}`]);
    });

    setSocket(socket);
  }, []);

  return (
    <div>
      <h1>nombre usuario: {nombreDelServer}</h1>
      <div className="flex flex-col gap-5 nt-20 px-10 lg:px-48">
        {/*muestro algun mensaje */}
        <div className="flex flex-col gap-2 border rounded-lg p-10">
          {/*este de aca abajo, como se ve en el map, va a escribir 2 veces el "hola"
        por que el estado del inbox hay 2 objetos */}
          {inbox.map((message, index) => (
            <div key={index} className="border rounded px-4 py-2">
              {message}
            </div>
          ))}
        </div>
        <div className="flex gap-2 align-center justify-center">
          <font color="white">
            <input
              onChange={(e) => {
                setMensaje(e.target.value);
                console.log("este es el target del mensaje", e.target.value);
              }}
              type="text"
              name="message"
              className="flex-1 bg-black border rounded px-2 py-1"
              id="mensaje"
            ></input>
          </font>

          <button
            className="w-40"
            onClick={() => {
              const input = document.getElementById("mensaje");
              manejarMensaje();
              input.value = "";
            }}
          >
            enviar mensaje
          </button>
        </div>
        {/** */}
        <div className="flex gap-2 align-center justify-center">
          <font color="white">
            <input
              onChange={(e) => {
                setRoomName(e.target.value);
              }}
              type="text"
              name="message"
              className="flex-1 bg-black border rounded px-2 py-1"
              id="roomName"
            ></input>
          </font>

          <button
            className="w-40"
            onClick={() => {
              const input = document.getElementById("roomName");
              manejarRoomName();
              input.value = "";
            }}
          >
            unirse al room
          </button>
        </div>
      </div>
    </div>
  );
}
