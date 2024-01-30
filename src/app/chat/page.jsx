"use client";
import { useEffect, useState } from "react";
import { Usuario } from "../../../componentes/usuario";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Chat(props) {
  console.log("COSAS QUE LLEGANa", props);
  const [veces, setVeces] = useState(0);
  const router = useRouter();
  const Datos = useSearchParams();
  const nombreDelServer = Datos.get("Datos");

  const click = () => {
    setVeces(veces + 1);
  };
  //tene cuidado con los ()
  useEffect(() => {
    console.log("SOY UN LOG DE USE EFFECT!");
    console.log("SOY LOS DATOS DEL SERVER!", nombreDelServer);

    if (veces === 10) {
      router.push(`/chat/testDatosChat?veces=${veces}`);
    }
  }, [veces]);

  return (
    <div>
      <h1>nombre usuario</h1>
      <Usuario></Usuario>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex
        voluptatem eligendi architecto quia modi voluptatum ad, obcaecati
        tempore consequatur deserunt aperiam. Tenetur eveniet non architecto,
        voluptas ea repellendus iusto!
      </h2>
      <h2>test de boton y estados</h2>
      <button onClick={click}>toca el boton {10 - veces} veces</button>
    </div>
  );
}
