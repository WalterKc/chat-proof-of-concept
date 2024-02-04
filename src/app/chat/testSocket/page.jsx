"use client";
import React, { useEffect, useState } from "react";
import SocketHandler from "./api/socket";
import io from "socket.io-client";
//import { testredireccion } from "../../../../componentes/socket";
//let socket;
//import { Socket } from "socket.io";
//var socket = io();

export default function TestSocket() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  /*
  useEffect(() => {
    //var socket = io();
    const testFetch = async () => {
      return await fetch("http://localhost:8080");
    };
    testFetch();
    let socket = io("http://localhost:8080");
    socket.on("connection", (socket) => {
      console.log("SE CONECTO EL SOCKET!", socket);
    });

    const testSHR = async () => {
      await SocketHandler();
    };
    //testSHR();
  }, []);
  */

  return (
    <div>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autoComplete="off" />
        <button>Send</button>
      </form>
    </div>
  );
}
