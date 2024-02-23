"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { borrarCookie, controlDeCookies } from "./cookies";

function crearCookie(nombre) {
  Cookies.set("nombre", nombre, { expires: 7 });
}

async function procesarFormulario(e, capturador, setNombre, nombreUsuario) {
  e.preventDefault();
  const datos = new FormData(e.target);
  const name = datos.get("name");
  const estado = await capturador(name);
  if (estado) {
    await setNombre(name);
    crearCookie(name);
    await controlDeCookies();
    return true;
  } else {
    alert("NOMBRE REPETIDO!, NO PODES ENTRAR!");

    await controlDeCookies();
    return false;
  }
}

export default function CapturadorDeFormulario(estado) {
  const capturador = estado.capturador;
  const borrador = estado.borradorDatos;
  const router = useRouter();
  const [nombreUsuario, setNombreUsuario] = useState(false);
  const [botonTest, setBotonTest] = useState(false);
  const setNombre = async (datos) => {
    setNombreUsuario(datos);
  };
  const setTestB = () => {
    setBotonTest(true);
  };
  const redireccion = (datos) => {
    router.push(`/chat/?Datos=${datos}`);
  };

  useEffect(() => {}, [nombreUsuario]);
  useEffect(() => {
    const nombre = document.cookie.split("=")[1];
    if (controlDeCookies()) {
      setNombre(nombre);
    }
  }, []);
  useEffect(() => {
    if (botonTest) {
      redireccion();
    }
  }, [botonTest]);

  return (
    <div>
      <h3>TEST DE FORMULARIO</h3>
      <h3>nombre de usuario actual: {nombreUsuario}</h3>
      <form
        id="mi-formulario"
        onSubmit={
          async (e) => {
            const datos = new FormData(e.target);
            const name = datos.get("name");
            const verificacionUusuario = await procesarFormulario(
              e,
              capturador,
              setNombre,
              nombreUsuario
            );
            if (verificacionUusuario) {
              redireccion(name);
            }
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
      <br></br>
    </div>
  );
}
