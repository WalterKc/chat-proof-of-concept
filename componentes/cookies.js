"use client";

export const click = async () => {
  alert("TEST DE CLICK");
  if (document.cookie.length > 0) {
    alert("TENEMOS UNA COOKIE!");
    console.log(document.cookie.split(";"));
  } else {
    alert("NO TENEMOS UNA COOKIE!");
  }
};
export const controlDeCookies = async () => {
  const numeroDeCookies = document.cookie.split(";");

  if (numeroDeCookies.length > 1) {
    alert("hay mas de 1 cookie! ,hay que borrarlas!");
    borrarCookie();
    return false;
  } else if (document.cookie.length > 0) {
    const nombre = document.cookie.split("=")[1];
    alert("hay solo una cookie!,ese es tu nombre! " + nombre);
    console.log("DATOS DE LA COOKIE", nombre);
    return true;
  } else {
    alert("No hay cookies!, podes crear tu nombre!");
    return false;
  }
};
export const borrarCookie = () => {
  //
  const numeroDeCookies = document.cookie.split(";");

  for (let i = 0; i < numeroDeCookies.length; i++) {
    document.cookie =
      numeroDeCookies[i] + "=;expires=" + new Date(0).toUTCString();
  }
};
export default function Cookie(estado) {
  const detectorDeCookies = estado.detectorDeCookies;

  return (
    <div>
      <button onClick={() => detectorDeCookies()}>
        detector de cookies del servidor
      </button>
      <br></br>
      <button onClick={() => click()}>detector de cookies del cliente</button>
    </div>
  );
}
