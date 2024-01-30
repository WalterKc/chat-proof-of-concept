"use client";
/**
 * bueno, esta es UNA MANERA DE PASAR LOS DATOS A TRAVEZ DE LOS CLIENTES, pero, aun no es suficiente
 * ya que necesito que sea controlable que se meta el Servidor
 */
import { useSearchParams } from "next/navigation";
export default function Chat(props) {
  const valor = useSearchParams();
  const numeroDeClicks = valor.get("veces");
  console.log("DATOS DE OTRO LUGAR", numeroDeClicks);
  return (
    <div>
      <h1>Texto test</h1>;<h2>DATOS:{numeroDeClicks}</h2>
    </div>
  );
}
