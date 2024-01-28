//import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

import CapturadorDeFormulario, { Usuario } from "../../componentes/formulario";
//ok, esto es horrible la verdad, un bardo tremendo para PASAR UNA PUTA FUNCION DEL SERVIDOR AL CLIENTE
//pero bueno, para aher eso hay que pasarla como props, por que esto es mañoso y no le gusta agarrar las funciones como les tiro
//luego, en el cliente tenes que usar un {fucncion} y ya esta, ahora vamos a ver como guardamos el estado
//nota. los estados solo funcionan en el cliente, no los uses en el server por que no funciona
//usa un array y ya
let arrayDeNombres = [];

async function capturarDatos(datos) {
  "use server";
  // const name = datos;

  console.log("CAPTURADOR SERVER", datos);
  //recorramos el array y comparemos
  //var indices = [];
  var coincidencias = [];
  //var array = ["a", "b", "a", "c", "a", "d"];
  var arrayTEST = ["a", "b", "a", "c", "a", "d"];
  var arrayTESTV2 = arrayDeNombres;
  //var element = "a";
  var elemento = "a";
  var elementoV2 = datos;
  //var idx = arrayTEST.indexOf(elemento);
  var indiceActual = arrayTESTV2.indexOf(elementoV2);

  while (indiceActual != -1) {
    coincidencias.push(indiceActual);
    indiceActual = arrayTESTV2.indexOf(elementoV2, indiceActual + 1);
  }
  console.log("coincidencias INDICES", coincidencias);
  if (coincidencias.length >= 1) {
    console.log("ALERTA ,  NOMBRE REPETIDO!");

    //arrayDeNombres.pop(datos);
    console.log("ARRAY", arrayDeNombres);
    return false;
  } else {
    arrayDeNombres.push(datos);
    console.log("PODES PASAR!");
    console.log("ARRAY", arrayDeNombres);
    //Usuario()
    return true, redirect("/chat");
  }
}
export default function HomePage() {
  /*
  [datos, setDatos] = useState(false);
  useEffect(() => {
    console.log("ESTADO GUARDAD", datos);
  }, []);
  */

  return (
    <div>
      <h1>Pagina principal</h1>
      <h2>pon tu nombre de usuario pls</h2>

      <CapturadorDeFormulario
        capturador={capturarDatos}
      ></CapturadorDeFormulario>
      {/*capturarDatos(CapturadorDeFormulario())*/}
    </div>
  );
}
/**
 * <form id="mi-formulario" onSubmit={(e) => procesarFormulario(e)}>
        <label>Nombre de usuario:</label>
        <input type="text" id="fname" name="fname"></input>
        <input type="submit" value="Continuar" id="BotonSubmit"></input>
      </form>
 */
//despues de poner el nombre, se salta a la sigiente pagina
