"use client";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

//recorda que este post se usa en la pagina post, y se pasa los datos de hay
let logeado = false;
function crearCookie(nombre) {
  //const datos = JSON.stringify(datosSinCodificar);

  Cookies.set(nombre, nombre, { expires: 7 });
}

async function procesarFormulario(e, capturador) {
  e.preventDefault();
  const datos = new FormData(e.target);
  const name = datos.get("name");
  //console.log("CAPTURADOR", capturador("a"));
  const estado = await capturador(name);

  if (estado) {
    console.log("NOMBRE VALIDO!, PODES ENTRAR!", "ESTADO", estado);
    //redirect("/chat");
    crearCookie(name);
  } else {
    console.log("NOMBRE REPETIDO!, NO PODES ENTRAR!", "ESTADO", estado);
    //logeado = false;
  }

  console.log("CAPTURADOR CLIENTE", e.target, name);
  //return name;
}
// no funciona
export function Usuario(nombreUsuario) {
  const [nombre, setNombre] = useState(true);
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
  //setNombre(nombreUsuario);
  console.log("NOMBRE", nombre);
}

export default async function CapturadorDeFormulario({ capturador }) {
  return (
    <div>
      <h3>TEST DE FORMULARIO</h3>
      <form
        id="mi-formulario"
        onSubmit={
          (e) => procesarFormulario(e, capturador) /* capturador() este no va*/
        }
      >
        <label>Nombre de usuario:</label>
        <input type="text" id="name" name="name"></input>
        <input type="submit" value="Continuar" id="BotonSubmit"></input>
      </form>
    </div>
  );
}
