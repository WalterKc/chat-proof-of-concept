import { Usuario } from "../../../componentes/formulario";

export default function Chat(props) {
  console.log("COSAS QUE LLEGANa", props);

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
    </div>
  );
}
