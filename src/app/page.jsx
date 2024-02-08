import CapturadorDeFormulario from "../../componentes/formulario";
import Cookie from "../../componentes/cookies";

let arrayDeNombres = [];

async function capturarDatos(datos) {
  "use server";

  var coincidencias = [];

  var arrayDatos = arrayDeNombres;
  var elementoActual = datos;
  var indiceActual = arrayDatos.indexOf(elementoActual);

  while (indiceActual != -1) {
    coincidencias.push(indiceActual);
    indiceActual = arrayDatos.indexOf(elementoActual, indiceActual + 1);
  }
  console.log("coincidencias INDICES", coincidencias);
  if (coincidencias.length >= 1) {
    console.log("ALERTA ,  NOMBRE REPETIDO!");

    console.log("ARRAY", arrayDeNombres);
    return false;
  } else {
    arrayDeNombres.push(datos);
    console.log("PODES PASAR!");
    console.log("ARRAY", arrayDeNombres);

    return true;
  }
}
async function borrarDatos(nombre) {
  "use server";
  const elementoABorrar = arrayDeNombres.indexOf(nombre);
  console.log("DATO A BORRAR!", elementoABorrar);

  arrayDeNombres.splice(elementoABorrar, 1);
  console.log("ARRAY ACTUAL", arrayDeNombres);
}
export default function HomePage() {
  const click = async () => {
    "use server";
    console.log("TEST DE CLICK");
  };

  return (
    <div>
      <h1>Pagina principal</h1>
      <h2>pon tu nombre de usuario pls</h2>

      <CapturadorDeFormulario
        capturador={capturarDatos}
        borradorDatos={borrarDatos}
      ></CapturadorDeFormulario>
      <Cookie detectorDeCookies={click}></Cookie>
    </div>
  );
}
