"use client";
import { React, useState } from "react";
import CapturadorDeFormulario from "./formulario";
function UsuarioDatos() {
  const [nombre, setNombre] = useState("NOMBRE TEST");
  /*
    useEffect(() => {
      console.log("ALGO PASA!");
      console.log("ALGO PASA2!", document);
    }, [document.cookie]);
    if (document.cookie.length > 0) {
      console.log("ALGO PASA4!", document.cookie);
    } else {
      console.log("ALGO NO PASA!", document.cookie);
    }
  
    console.log("ALGO PASA3!", document.cookie);
    */
  //setNombre(nombreusuario);

  return (
    <div className="App">
      <CapturadorDeFormulario setNombre={setNombre}></CapturadorDeFormulario>
      <Usuario nombre={nombre}></Usuario>
    </div>
  );
}

export function Usuario(estado) {
  const nombre = estado.nombre;

  console.log("NOMBRE ESTADO", nombre);
  return <h2>nombre</h2>;
}
