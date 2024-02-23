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
  if (coincidencias.length >= 1) {
    return false;
  } else {
    arrayDeNombres.push(datos);

    return true;
  }
}
async function borrarDatos(nombre) {
  "use server";
  const elementoABorrar = arrayDeNombres.indexOf(nombre);

  arrayDeNombres.splice(elementoABorrar, 1);
}
export default function HomePage() {
  return (
    <div>
      <h1>Pagina principal</h1>
      <h2>pon tu nombre de usuario </h2>

      <CapturadorDeFormulario
        capturador={capturarDatos}
        borradorDatos={borrarDatos}
      ></CapturadorDeFormulario>
      <Cookie></Cookie>
    </div>
  );
}
