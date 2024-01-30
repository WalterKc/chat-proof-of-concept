"use client";
//import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { borrarCookie, click, controlDeCookies } from "./cookies";

//recorda que este post se usa en la pagina post, y se pasa los datos de hay
let logeado = false;
function redireccionExterna(datos) {
  const router = useRouter();
  router.push(`/chat/?Datos=${datos}`);
}
function crearCookie(nombre) {
  //const datos = JSON.stringify(datosSinCodificar);

  Cookies.set("nombre", nombre, { expires: 7 });
}

async function procesarFormulario(e, capturador, setNombre) {
  e.preventDefault();
  const datos = new FormData(e.target);
  const name = datos.get("name");
  //console.log("CAPTURADOR", capturador("a"));
  const estado = await capturador(name);
  if (estado) {
    console.log("NOMBRE VALIDO!, PODES ENTRAR!", "ESTADO", estado);
    //redirect("/chat");
    crearCookie(name);
    setNombre(name);
    //click();
    controlDeCookies();

    return true;

    //Usuario(name);
  } else {
    console.log("NOMBRE REPETIDO!, NO PODES ENTRAR!", "ESTADO", estado);
    //logeado = false;
    //click();
    //alert("UNA ALERTA");

    controlDeCookies();
    return false;
  }

  console.log("CAPTURADOR CLIENTE", e.target, name);
  //return name;
}

export default function CapturadorDeFormulario(estado) {
  const capturador = estado.capturador;
  const borrador = estado.borradorDatos;
  //const setNombre = estado.setNombre;
  const [nombreUsuario, setNombreUsuario] = useState(false);
  const setNombre = (datos) => {
    setNombreUsuario(datos);
  };
  const redireccion = (datos) => {
    const router = useRouter();
    router.push(`/chat/?Datos=${datos}`);
  };

  useEffect(() => {
    console.log("EL NOMBRE DE USUARIO CAMBIO!!!!!", nombreUsuario);
  }, [nombreUsuario]);

  //const router = useRouter();

  return (
    <div>
      <h3>TEST DE FORMULARIO</h3>
      <h3>nombre de usuario actual: {nombreUsuario}</h3>
      <form
        id="mi-formulario"
        onSubmit={
          (e) => {
            procesarFormulario(e, capturador, setNombre);
          } /* capturador() este no va*/
        }
      >
        <label>Nombre de usuario:</label>
        <input type="text" id="name" name="name"></input>
        <input type="submit" value="Continuar" id="BotonSubmit"></input>
      </form>
      <button
        onClick={() => (borrador(nombreUsuario), setNombre(""), borrarCookie())}
      >
        BORRAR USUARIO DEL SERVIDOR
      </button>
    </div>
  );
}
